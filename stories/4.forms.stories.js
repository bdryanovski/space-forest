import React from 'react';

export default {
  title: 'Forms',
};

export const BasicFormControls = () => {
  return (
    <div className="container">
      <div className="column around">

        <div className="form-element">
          <label htmlFor="input">Name</label>
          <input id="input" name="input" placeholder="Example input" />
        </div>

        <div className="form-element">
          <label htmlFor="textarea">Textarea</label>
          <textarea id="textarea" name="textarea" placeholder="Example textarea"></textarea>
        </div>

        <div className="form-element">
          <label htmlFor="select">Select</label>
          <select id="select" name="select">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>

        <div className="form-element">
          <label htmlFor="selectMultiple">Multiple Select</label>
          <select id="selectMultiple" name="selectMultiple" size="4" multiple>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="form-element">
          <label>Radio</label>
          <div className="form-element-row">
            <input id="one" name="radio" type="radio" value="one"></input>
            <label htmlFor="one">One</label>
          </div>

          <div className="form-element-row">
            <input id="two" name="radio" type="radio" value="two"></input>
            <label htmlFor="two">Two</label>
          </div>

          <div className="form-element-row">
            <input id="three" name="radio" type="radio" value="three"></input>
            <label htmlFor="three">Three</label>
          </div>
        </div>

        <div className="form-element">
          <label>Checkbox</label>
          <div className="form-element-row">
            <input id="one" name="one" type="checkbox" value="one"></input>
            <label htmlFor="one">One</label>

          </div>

          <div className="form-element-row">
            <input id="two" name="two" type="checkbox" value="two"></input>
            <label htmlFor="two">Two</label>
          </div>

          <div className="form-element-row">
            <input id="three" name="three" type="checkbox" value="three"></input>
            <label htmlFor="three">Three</label>
          </div>

        </div>

      </div>
    </div>
  );
};

export const AddonsControls = () => {
  return (
    <div className="container">
      <div className="column around">

        <div className="form-element">
          <label htmlFor="input">Name</label>
          <div className="form-group">
            <div className="form-addon">@</div>
            <input id="input" name="input" value="" placeholder="Example input" />
            <div className="form-addon">#</div>
          </div>
        </div>

        <div className="form-element">
          <label htmlFor="input">Name</label>
          <div className="form-group">
            <div className="form-addon">@</div>
            <input id="input" name="input" value="" placeholder="Example input" />
          </div>
        </div>


        <div className="form-element">
          <label htmlFor="input">Name</label>
          <div className="form-group">
            <input id="input" name="input" value="" placeholder="Example input" />
            <div className="form-addon">#</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export const ButtonsNative = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row around">
          <button>Default</button>
          <button className="btn-primary">Primary</button>
          <button className="btn-success">Success</button>
          <button className="btn-warning">Warning</button>
          <button className="btn-link">Link</button>
          <button className="btn-outline">Outline</button>
          <button className="btn-danger">Error</button>
          <button disabled="disabled">Disabled</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export const ButtonsAsClass = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row around">
          <div className="btn">Default</div>
          <div className="btn btn-primary">Primary</div>
          <div className="btn btn-success">Success</div>
          <div className="btn btn-warning">Warning</div>
          <div className="btn btn-link">Link</div>
          <div className="btn btn-outline">Outline</div>
          <div className="btn btn-danger">Error</div>
          <div className="btn btn-disabled">Disabled</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const Links = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="column arround">
          <a href="#">Simple link</a>
          <a href="#" className="active">Active link</a>
          <a href="#" className="primary">Primary link</a>
          <a href="#" className="success">Success link</a>
          <a href="#" className="warning">Warning link</a>
          <a href="#" className="danger">Danger link</a>

        </div>
      </div>
    </React.Fragment>
  )
}