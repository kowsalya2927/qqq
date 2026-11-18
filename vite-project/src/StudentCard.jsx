function StudentCard(props) {
    return (
        <div className="student-card">
        <h2>{props.name}</h2>
        <p>Course: {props.course}</p>
        <p>Role: {props.role}</p>
        <p>College: {props.college}</p>
        </div>
    );
}
export default StudentCard;