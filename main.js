(function () {
  const template = document.createElement('template') 
  template.innerHTML = `
      <styte>
      </style>
      <div id="root" style="width: 100%; height: 100%;"> 
      Hello Custom Widget
      </div>
  `
  class Main extends HTMLElement {
    constructor () {
      super()
  
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(template.content.cloneNode(true)) 
      
      this._root = this._shadowRoot.getElementById('root')
    }

    onCustomWidgetResize (width, height) {
      this.render()
      }
      
      onCustomWidgetAfterUpdate (changedProps) {
      }
      
      onCustomWidgetDestroy () {
      }
      
      render () {
      this._root.textcontent = 'Hello Custom Widget clientwidth: ${this.clientwidth}, clientHeight: ${this.clientHeight}' }
  }

  customElements.define('com-sap-sac-exercise-seamark-main', Main)

})()