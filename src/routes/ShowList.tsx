import { useState } from "react";

const ShowList = () => {
    const [list, setList] = useState();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div>
            <h1>Show list</h1>
        </div>
    );
}

export default ShowList;