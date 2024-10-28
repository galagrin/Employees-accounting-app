import './app.css';
import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';

export const App = () => {
    const data = [
        { name: 'Ivan Petrov', salary: 900, increase: false },
        { name: 'Petr Smirnov', salary: 1200, increase: true },
        { name: 'Sergey Gurov', salary: 3400, increase: false },
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
