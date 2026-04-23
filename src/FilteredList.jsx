import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: 'All'
        };
    }

    onSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    onFilter = (e) => {
        this.setState({ type: e.target.value });
    }

    filterItem = (item) => {
        const matchesSearch = item.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase());
        const matchesType = this.state.type === 'All' || item.type === this.state.type;
        return matchesSearch && matchesType;
    }

    render() {
        const filteredItems = this.props.items.filter(this.filterItem);

        return (
            <div className="filtered-list">
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.onSearch}
                />
                <select value={this.state.type} onChange={this.onFilter}>
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>
                <List items={filteredItems} />
            </div>
        );
    }
}

export default FilteredList;
