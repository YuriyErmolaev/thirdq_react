import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {toggleCheckbox} from "../../store/Profile/actions";
import {getCheckbox, getName} from "../../store/Profile/selectors";

export const Profile = () => {

    const checkboxVal = useSelector(getCheckbox, shallowEqual);
    const name = useSelector(getName, shallowEqual);
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