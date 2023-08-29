import {Component} from 'react'

import CountriesItem from '../CountriesItem'
import VisitedCountry from '../VisitedCountry'

import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

const countriesVisited = initialCountriesList.filter(
  eachItem => eachItem.isVisited === true,
)

class VisitCountries extends Component {
  state = {
    visitedCountries: countriesVisited,
    countriesList: initialCountriesList,
  }

  onClickVisit = id => {
    const {countriesList} = this.state
    const visitedCountry = countriesList.filter(
      eachCountry => eachCountry.id === id,
    )
    const index = countriesList.lastIndexOf(visitedCountry[0])
    console.log(index)
    const newVisitedCountry = visitedCountry.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.imageUrl,
      isVisited: true,
    }))
    countriesList.splice(index, 1, newVisitedCountry[0])
    this.setState(prevState => ({
      visitedCountries: [...prevState.visitedCountries, newVisitedCountry[0]],
      countriesList,
    }))
  }

  onClickRemove = id => {
    const {visitedCountries, countriesList} = this.state
    const newVisitedCountries = visitedCountries.filter(each => each.id !== id)
    const removedCountry = visitedCountries.filter(each => each.id === id)
    const index = countriesList.lastIndexOf(removedCountry[0])
    console.log(index)
    const newRemovedCountry = removedCountry.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.imageUrl,
      isVisited: false,
    }))
    countriesList.splice(index, 1, newRemovedCountry[0])
    this.setState({
      visitedCountries: newVisitedCountries,
      countriesList,
    })
  }

  render() {
    const {visitedCountries, countriesList} = this.state
    const noVisitedCountries = visitedCountries.length === 0
    console.log(visitedCountries)
    return (
      <div className="bg-container">
        <div className="first-section">
          <h1 className="heading">Countries</h1>
          <ul className="countries-container">
            {countriesList.map(eachCountry => (
              <CountriesItem
                key={eachCountry.id}
                countryDetails={eachCountry}
                onClickVisit={this.onClickVisit}
              />
            ))}
          </ul>
        </div>
        <div className="second-section">
          <h1 className="heading">Visited Countries</h1>
          {noVisitedCountries && (
            <div className="no-visited-container">
              <p>No Countries Visited Yet!</p>
            </div>
          )}
          {!noVisitedCountries && (
            <ul className="visited-container">
              {visitedCountries.map(eachVisited => (
                <VisitedCountry
                  key={eachVisited.id}
                  visitedCountry={eachVisited}
                  onClickRemove={this.onClickRemove}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default VisitCountries
