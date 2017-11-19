import _ from 'lodash'
import React, { Component } from 'react'
//import { Search, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import history from '../history'

const resultRenderer = ({ img, price, name, description }) => (
  <div>
    <Image key={img} src={img} />
    <div key={name} className="content">
      {' '}
      {price && <div className="price">{price}</div>}{' '}
      {name && <div className="name">{name}</div>}{' '}
      {description && (
        <div className="description">{description.slice(0, 20) + '...'}</div>
      )}{' '}
    </div>
  </div>
)

const customQuestionNav = props => {
  const products = props.products.map(product =>
    Object.assign(
      {},
      {
        id: product.id,
        name: product.name,
        description: product.description,
        img: product.img,
        price: product.price === 0 ? 'Free' : `$${product.price / 100}`,
        key: product.id
      }
    )
  )
  return <QuestionNav resultRenderer={resultRenderer} products={products} />
}

class QuestionNav extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (__, { result }) =>
    history.push(`/products/${result.id}`)

  handleKeyPress = target => {
    if (target.charCode === 13) {
      history.push(`/products?search=${this.state.value}`)
      this.resetComponent()
    }
  }

  handleSearchChange = (__, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.products, isMatch)
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        resultRenderer={resultRenderer}
        placeholder="Search..."
        onKeyPress={this.handleKeyPress}
      />
    )
  }
}

const mapState = state => ({
  products: state.products
})

export default connect(mapState)(customQuestionNav)
