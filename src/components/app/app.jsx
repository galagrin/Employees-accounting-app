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

    // onToggleIncrease = (id) => {
    //     // первый вариант
    //     // this.setState(({ data }) => {
    //         const index = data.findIndex((elem) => elem.id === id);
    //         const old = data[index];
    //         const newItem = { ...old, increase: !old.increase };
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //         return { data: newArr };
    //     });

    //     // второй вариант
    //     this.setState(({ data }) => ({
    //         data: data.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, increase: !item.increase };
    //             }
    //             return item;
    //         }),
    //     }));
    // };

    // onToggleRise = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, rise: !item.rise };
    //             }
    //             return item;
    //         }),
    //     }));
    // };

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

    render() {
        const { data, term } = this.state;

        const employees = this.state.data.length;
        const increaseed = this.state.data.filter((item) => item.increase).length;
        const visibleData = this.searchEmp(data, term);
        return (
            <div className="app">
                <AppInfo employees={employees} increaseed={increaseed} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    // onToggleRise={this.onToggleRise}
                    onToggleProp={this.onToggleProp}
                />

                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
