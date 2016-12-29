var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className='text-center'>Examples</h1>
        <p>Here is some examples locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Basra'>Basra</Link>
          </li>
          <li>
            <Link to='/?location=Baghdad'>Baghdad</Link>
          </li>
          <li>
            <Link to='/?location=Bucharest'>Bucharest</Link>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = Examples;
