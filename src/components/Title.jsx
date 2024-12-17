import logo from '../assets/logo-svgrepo-com.svg';

export default function Title({ title }) {
    return (
        <div className="title-container">
            <img src={logo} alt="Logo" />
            <h1>{title}</h1>
        </div>
    );
}
