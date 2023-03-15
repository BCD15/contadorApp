import { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { TextInput } from "react-native-web";

export default class Counter extends Component {

    state = {
        count: 0,
        step: 1,
    };

    truco() {
        if (this.state.count < this.props.limite)
        // if(this.state.count < 12)
        this.setState({ count: this.state.count +3 });
    };

    incrementar() {
        if (this.state.count < this.props.limite)
        // if(this.state.count < 12)
        this.setState({ count: this.state.count + this.state.step });
    };
    
    decrementar() {
        if (this.state.count > this.props.limitezero)
        // if(this.state.count > 0)
        this.setState({ count: this.state.count - this.state.step });
    };

    alteraStep(e) {
        this.setState({ step: parseInt(e.nativeEvent.text) });
    }

    alteraStep2(text) {
        this.setState({ step: parseInt(text) });
    }

    render () {
        return (
        <View style={styles.contador}>
        <TextInput
            value={this.state.step.toString}
            onChange={(e) => this.alteraStep(e)}
            inputMode="numeric"
            keyboardType="numeric"
        />
        <TextInput
            defaultValue={this.state.step}
            onChangeText={(text) => this.alteraStep2(text)}
            inputMode="numeric"
            keyboardType="numeric"
        />
        <Text>Contador: {this.state.count}</Text>
        <Button onPress={() => this.incrementar()} title="+" />
        <Button onPress={() => this.decrementar()} title="-" />
        <Button onPress={() => this.truco()} title="Truco" />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    contador: {
        flexDirection : 'row',
        alignItems: 'center',
        backgroundColor: 'darkcyan',
        padding: '10px',       
    }
})