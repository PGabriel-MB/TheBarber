import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #1C1C1C;
    flex: 1;
    justify-content: center;
    align-items: center;  
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
    width: 250px;
    margin-top: 20px;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
    margin-top: 20px;
`;

export const LocationArea = styled.View``;
export const LocationInput = styled.TextInput``;
export const LocationFinder = styled.TouchableOpacity``;
