import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import Chart from './Chart'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import {DateRangePicker} from './DateRangePicker';
import {DateRangeCaption} from './DateRangeCaption';

import 'react-select/dist/react-select.css'

class ArticleList extends Component {

    state = {
        selected: null,
        from: null,
        to: null
    }

    componentDidMount() {
        console.log('---', 2)
        console.log('---', findDOMNode(this.refs.chart))
    }

    render() {
        const { articles, isOpen, openItem } = this.props
        const { from, to } = this.state;

        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isOpen(article.id)}
                openArticle = {openItem(article.id)}
            />
        </li>)

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <DateRangePicker 
                  from={from}
                  to={to}
                  onRangeSelect={this.onRangeSelect}
                />

                <DateRangeCaption
                  from={from}
                  to={to}
                />

                <ul>
                    {articleItems}
                </ul>
                <Chart ref="chart" />
                <Select
                    options = {options}
                    onChange = {this.handleChange}
                    value= {this.state.selected}
                    multi = {true}
                />
            </div>
        )
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }

    onRangeSelect = (range) => {
        this.setState(range);
    };
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,

    isOpen: PropTypes.func.isRequired,
    openItem: PropTypes.func.isRequired
}

export default oneOpen(ArticleList)