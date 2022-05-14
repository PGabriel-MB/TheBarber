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

export const LocationArea = styled.View`
    background-color: #0A0A0A;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #AAAAAA;
`;

export const LocationFinder = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 70px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;
