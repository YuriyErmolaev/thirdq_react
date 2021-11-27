import {useSelector, useDispatch} from "react-redux";
import {toggleCheckbox} from "../../store/Profile/actions";
import {store} from "../../store";

export const Profile = () => {

    const checkboxVal = useSelector(state => state.checkbox);
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();

    const changeHandler = () => {
        dispatch(toggleCheckbox);
    };

    return (
        <div className="wrapper">
            <h1>Profile</h1>
            <input type={'checkbox'} onChange={changeHandler} checked={checkboxVal} />
            <div>{name}</div>
            <div>{checkboxVal}</div>
        </div>
    );
}

export default Profile;