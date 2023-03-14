const Rank = ({ name, enteries }) => {
    return (
        <div className="text-center m-5">
            <div className="text-3xl text-white">
                {`${name}, your current rank is ...`}
            </div>
            <div className="text-3xl text-white">
                {enteries}
            </div>
        </div>
    );
}
export default Rank;