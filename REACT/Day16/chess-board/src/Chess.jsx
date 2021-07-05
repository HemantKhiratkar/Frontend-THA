import "./style.css";

const Chessboard = () => {
    let boxes = [];
    for (let i=0; i<8; i++) {
        boxes.push(<div className="square"/>);
    }
    return (
        <div className="App">
            <div className="Chessboard">
                <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                </div>
            </div>
    );
};


export default Chessboard;