import React, { Component } from 'react'

export default class FormsDocumentation extends Component {
  render() {
    return (
      <>
        <h1>Forms</h1>
        <p>Write documentation on this topic</p>

        <form>
          <div className="form-row">
            <input  placeholder="Random input inside form" />
          </div>
        </form>

        <div className="form-row">
          <input placeholder="Stand alone input ..."/>
        </div>

        <h2>With label</h2>

        <div className="form-row">
          <label htmlFor="username">Username</label>
          <input id="username" placeholder="Enter username" />
        </div>

        <h3>With helper text</h3>

        <div className="form-row">
          <label htmlFor="monkey">Monkey</label>
          <input id="monkey" placeholder="Enter monkey name" />
          <div className="input-helper-text">Short name for that monkey!</div>
        </div>


        <h3>With error text</h3>

        <div className="form-row">
          <label htmlFor="monkey2">Monkey</label>
          <input id="monkey2" placeholder="Enter monkey name" />
          <div className="input-error-text">The monkey is not a valid name</div>
        </div>


        <h3>Input with prefix and suffix</h3>

        <p>Prefix</p>

        <div className="form-row">
          <label htmlFor="website">Url</label>
          <span>http://</span>
          <input id="website" placeholder="Enter website address" />
        </div>

        <p>Suffix</p>

        <div className="form-row">
          <label htmlFor="google-account">Register</label>
          <input id="google-acount" placeholder="Google account" />
          <span>@gmail.com</span>

        </div>

        <h3>Textarea</h3>

        <div className="form-row">
          <label htmlFor="comment">Twitter</label>
          <textarea id="comment" placeholder="Write message ..." cols="100" rows="5"></textarea>
        </div>

        <h3>Select and options - dropdown</h3>
        <div className="form-row">
          <label htmlFor="option">Select one of two option</label>
          <select id="option">
            <option>One</option>
            <option>Two</option>
          </select>
        </div>

      </>
    )
  }
}
