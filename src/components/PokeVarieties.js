import React from 'react';
import './styles/PokeVarieties.css';
const pokemon = require('pokemon-base-stats/node_modules/pokemon');

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appearance: 'normal',
      forme: this.props.formes[0],
      sprite: `https://projectpokemon.org/images/normal-sprite/${this.props.name
      .toLowerCase()
      .replace(/\s/g, '')
      .replace(':', '')}.gif`,
    };
    this.handleFormeTabClick = this.handleFormeTabClick.bind(this);
    this.handleFormeChange = this.handleFormeChange.bind(this);
    this.handleAppearanceTabClick = this.handleAppearanceTabClick.bind(this);
    this.handleAppearanceChange = this.handleAppearanceChange.bind(this);
    this.updateSprite = this.updateSprite.bind(this);
  }

  componentDidMount() {
    var currentForme = document.getElementsByClassName('forme-tab')[0];
    var currentAppearance = document.getElementsByClassName('appearance-tab')[0];

    var formeTabs = Array.from(document.getElementsByClassName('forme-tab'));
    var appearanceTabs = Array.from(document.getElementsByClassName('appearance-tab'));

    formeTabs.forEach(forme => forme.className.replace(' active', ''));
    currentForme.className += ' active';

    appearanceTabs.forEach(appearance => appearance.className.replace(' active', ''));
    currentAppearance.className += ' active';
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hp !== this.props.hp) {
      this.setState({ forme: this.props.formes[0] });
      this.setState({ sprite: `https://projectpokemon.org/images/normal-sprite/${this.props.name
      .toLowerCase()
      .replace(/\s/g, '')
      .replace(':', '')}.gif` });

      var currentForme = document.getElementsByClassName("forme-tab")[0];
      var currentAppearance = document.getElementsByClassName("appearance-tab")[0];
  
      var formeTabs = document.getElementsByClassName("forme-tab");
      var appearanceTabs = document.getElementsByClassName("appearance-tab");
  
      for (let i = 0; i < formeTabs.length; i++) {
        formeTabs[i].className = formeTabs[i].className.replace(" active", "");
      }
      currentForme.className += " active";
  
      for (let i = 0; i < appearanceTabs.length; i++) {
        appearanceTabs[i].className = appearanceTabs[i].className.replace(" active", "");
      }
      currentAppearance.className += " active";
    }

  }

  handleFormeTabClick(forme) {
    this.setState({ forme: forme, appearance: 'normal' }, () => this.handleFormeChange());
  }

  handleFormeChange() {
    const { forme } = this.state;
    const { appearance } = this.state;

    console.log('formeIndex :', Array.from(document.getElementsByClassName("forme-tab")).indexOf(document.getElementById(forme)));
    
    this.props.updatePokemon(this.props.id, Array.from(document.getElementsByClassName("forme-tab")).indexOf(document.getElementById(forme)));

    this.setState({ sprite: this.updateSprite(forme, appearance) });
  }

  handleAppearanceTabClick(appearance) {
    this.setState({ appearance: appearance }, () => this.handleAppearanceChange());
  }

  handleAppearanceChange() {
    const { forme } = this.state;
    const { appearance } = this.state;

    this.setState({ sprite: this.updateSprite(forme, appearance) });
  }

  updateSprite(forme, appearance) {
    console.log('forme :', forme);
    console.log('appearance :', appearance);

    var formeTabs = document.getElementsByClassName('forme-tab');
    var appearanceTabs = document.getElementsByClassName('appearance-tab');

    var currentForme = document.getElementById(forme);
    var currentAppearance = document.getElementById(appearance);

    for (let i = 0; i < formeTabs.length; i++) {
      formeTabs[i].className = formeTabs[i].className.replace(' active', '');
    }
    currentForme.className += ' active';

    for (let i = 0; i < appearanceTabs.length; i++) {
      appearanceTabs[i].className = appearanceTabs[i].className.replace(' active', '');
    }
    currentAppearance.className += ' active';

    const sprite =
      forme === this.props.formes[0]
        ? `https://projectpokemon.org/images/${appearance}-sprite/${this.props.name
            .toLowerCase()
            .replace(/\s/g, '')
            .replace(':', '')}.gif`
        : `https://projectpokemon.org/images/${appearance}-sprite/${this.props.name
            .toLowerCase()
            .replace(/\s/g, '')
            .replace(':', '')}-${forme.toLowerCase()}.gif`;
    return sprite;
  }

  render() {
    return (
      <div className="pokemon-varieties">
        <div className="forme-tabs">
          {this.props.formes.map(forme => (
            <button
              className="forme-tab"
              id={forme}
              key={forme}
              onClick={event => this.handleFormeTabClick(event.target.id)}
            >
              {forme.replace('-', ' ')}
            </button>
          ))}
        </div>
        <div className="appearance-tabs">
          {this.props.innerTabs.map(({ appearance }) => {
            return (
              <button
                className="appearance-tab"
                id={appearance}
                key={appearance}
                onClick={event => this.handleAppearanceTabClick(event.target.id)}
              >
                {appearance}
              </button>
            );
          })}
        </div>
        <div className="sprite">
          <img
            id="pokemon-sprite"
            src={this.state.sprite}
            alt={`${this.props.name}.gif`}
          />
        </div>
      </div>
    );
  }
}

export default Tabs;
