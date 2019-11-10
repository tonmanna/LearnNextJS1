import React, { Component } from "react"
import ReactDataSheet from 'react-datasheet';
import { getFirebase } from "../../lib/firebase";

class TonySheet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            grid: props.data.data,
            disable: false
        }
        this.onCellsChanged = this.onCellsChanged.bind(this);
        this.onCellsUpdate = this.onCellsUpdate.bind(this);
    }

    componentDidMount() {
        this.onCellsUpdate();
    }

    componentDidUpdate() {
        console.log("STATE:", this.state)
    }

    onCellsUpdate() {
        var localScope = this;
        var db = getFirebase().database();
        var ref = db.ref();
        ref.on('value', function (snapshot) {
            const val = snapshot.val();
            if (!localScope.state.disable) {
                localScope.setState({ grid: val.data, disable: false })
            } else {
                localScope.setState({ ...localScope.state, disable: false })
            }
        });
    }

    onCellsChanged(changes) {
        const grid = this.state.grid.map(row => [...row])
        changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value }
        })
        var db = getFirebase().database();
        var ref = db.ref();
        ref.update({
            data: grid
        });
        this.setState({ grid: grid, disable: true })
    }

    render() {
        return (
            <ReactDataSheet
                data={this.state.grid}
                valueRenderer={(cell) => cell.value}
                onCellsChanged={this.onCellsChanged}
            />
        )
    }
}

export default TonySheet