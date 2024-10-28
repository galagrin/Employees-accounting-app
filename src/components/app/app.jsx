import './app.css';
import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';

export const App = () => {
    const data = [
        { name: 'Ivan Petrov', salary: 900, increase: false, id: 1 },
        { name: 'Petr Smirnov', salary: 1200, increase: true, id: 2 },
        { name: 'Sergey Gurov', salary: 3400, increase: false, id: 3 },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data} />

            <EmployeesAddForm />
        </div>
    );
};
