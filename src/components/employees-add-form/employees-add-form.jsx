import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            nameClass: 'form-control new-post-label',
            salaryClass: 'form-control new-post-label',
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === '') {
            alert('Заполните имя сотрудника');
            this.setState({ nameClass: 'form-control new-post-label outline' });
        } else if (this.state.salary === '') {
            alert('Введите зарплату сотрудника');
            this.setState({ salaryClass: 'form-control new-post-label outline' });
        } else {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                nameClass: 'form-control new-post-label',
                salaryClass: 'form-control new-post-label',
            });
        }
    };
    render() {
        const { name, salary, nameClass, salaryClass } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className={nameClass}
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className={salaryClass}
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
