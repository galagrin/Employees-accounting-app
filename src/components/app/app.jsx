import { Component } from 'react';

import { AppInfo } from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Ivan Petrov', salary: 900, increase: false, rise: true, id: 1 },
                { name: 'Petr Smirnov', salary: 1200, increase: true, rise: false, id: 2 },
                { name: 'Sergey Gurov', salary: 3400, increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: 'all',
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term: term });
    };

    onFilterSelect = (filter) => {
        this.setState({ filter });
    };

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter((item) => item.rise);
            case 'moreThan1000':
                return items.filter((item) => item.salary > 1000);
            default:
                return items;
        }
    };

    render() {
        const { data, term, filter } = this.state;

        const employees = this.state.data.length;
        const increaseed = this.state.data.filter((item) => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo employees={employees} increaseed={increaseed} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />

                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
