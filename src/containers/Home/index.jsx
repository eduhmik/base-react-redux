import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { test as testAction } from "../../redux/actions/testActions"
import Button from "../../components/Button"

const Home = () => {
    const {test} = useSelector((state) => state)

    const [loadingState, setLoadingState] = useState(test.isLoading)

    const dispatch = useDispatch()

    const handleLogin = () => {
        // alert('huh')
        dispatch(testAction())
    }

    useEffect(() => {
        console.log("Here")
        console.log(loadingState)
        setLoadingState(test)
    }, [test, loadingState])

    return (
        <div>
            Home
            <Button title = { test.isLoading ? "Loading" : "Login" } handleClick = {handleLogin} />
        </div>
    )
}

export default Home;