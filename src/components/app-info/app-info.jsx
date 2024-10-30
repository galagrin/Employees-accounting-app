import './app-info.css';

export const AppInfo = ({ increaseed, employees }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании </h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increaseed}</h2>
        </div>
    );
};
