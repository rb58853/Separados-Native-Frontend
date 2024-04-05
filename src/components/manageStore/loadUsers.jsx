import { useDispatch } from "react-redux";
import { LoadUsers } from "../../api/loadUsers";
import { SetUsers } from "../../store/users/functions";
import { setUsers } from "../../store/users/usersSlice";

export function LoadUsersComponent(){
    const dispatch = useDispatch()
    dispatch(setUsers(LoadUsers()))
}