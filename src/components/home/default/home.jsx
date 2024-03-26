import { View, Text, FlatList } from "react-native";
import users from "../../../data/users";
import UserFast from "../../user/userFast/userFast";
import { useRef, useState } from "react";
import perfil from "../../../data/perfil";

function DefaulHome() {
    const usersView = []
    Object.values(users).forEach((user_, index) => {
        if (user_.nick != 'my_user')
            usersView.push({ id: index, user: user_.nick })
    })

    const renderItem = ({ item }) => (
        <UserFast userKey={item.user} />
    );

    const [indexUser, setIndexUser] = useState(0)

    const ref = useRef()
    // useEffect(() => {
    //     if (ref.current) {
    //         ref.current.scrollToIndex({ index: indexImage, animated: true });
    //     }
    // }, [indexUser]);

    return (
        <FlatList
            ref={ref}
            data={usersView}
            horizontal={false}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            style={{}}
            contentContainerStyle={{ gap: 30 }}
        // showsHorizontalScrollIndicator={false}
        />
    )
}
export default DefaulHome