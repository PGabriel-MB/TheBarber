import React from "react";
import { UserService } from "../../api/services/UserService";
import { Container, TexLogo} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

interface iProps {}

interface iState {
    id: string,
    name: string,
    ranking: number
}

class Barber extends React.Component<iProps, iState> {
    request = new UserService();
    navigation = useNavigation();
    route = useRoute();

    constructor(props: iProps) {
        super(props);
        this.state = {
            id: '',
            name: '',
            ranking: 0
        }
    }

    componentDidMount() {
        this.request.getUserById(this.state.id)
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