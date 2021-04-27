import React from "react";
import { UserService } from "../../api/services/UserService";
import { Container, TexLogo} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

class Barber extends React.Component {
    request = new UserService();
    navigation = useNavigation();
    route = useRoute();

    constructor(props: any) {
        super(props);
        this.state = {
            userInfo: {
                id: this.route.params.id,
                name: this.route.params.name
            }
        }
    }

    componentDidMount() {
        this.request.getUserById()
    }

    render() {
        return (
            <Container>
                <TexLogo>Eu sou Um barbeiro</TexLogo>
            </Container>
        )
    }
}
export default Barber;