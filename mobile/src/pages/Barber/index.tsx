import React from "react";
import { UserService } from "../../api/services/UserService";
import { Container, TexLogo} from "./styles";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

interface iProps {}

interface iState {
    id: string,
    name: string,
    ranking: number
}

type BarberRouteProp = {
    Barber: {
        id: string,
        name: string,
        ranking: number
    }
}

class Barber extends React.Component<iProps, iState> {
    request = new UserService();
    navigation = useNavigation();
    route = useRoute<RouteProp<BarberRouteProp, 'Barber'>>();

    constructor(props: iProps) {
        super(props);
        this.state = {
            id: this.route.params.id,
            name: this.route.params.name,
            ranking: this.route.params.ranking
        }
    }

    componentDidMount() {
        //this.request.getUserById(this.state.id)
    }

    render() {
        return (
            <Container>
                <TexLogo>Eu sou {this.state.name} </TexLogo>
            </Container>
        )
    }
}
export default Barber;