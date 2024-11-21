import typescriptLogo from './typescript.svg'
import { Hello } from '../lib/main'

export default function App() {
  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1></h1>
      <div className="card">
        <Hello />
      </div>
      <p className="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  )
}