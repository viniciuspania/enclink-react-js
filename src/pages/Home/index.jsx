import { useState } from "react";
import { FiLink } from "react-icons/fi";
import Menu from "../../Components/Menu";
import LinkItem from "../../Components/LinkItem";
import "./home.css";

import api from '../../services/api'
import { savedLink} from '../../services/storeLinks'

export default function Home() {
  const [url, setUrl] = useState("");
  const [showModal, setShowModal] = useState(false)

  const [data, setData] = useState({})

  async function handleShortLink() {

    if(!url){
      alert("É preciso preencher um link para ser encurtado.")
      return
    }

    try {
      const response = await api.post("/shorten", {
        long_url: url
      })

      setData(response.data)
      setShowModal(true)

      savedLink("@encurtaLink", response.data)

      setUrl("")

    } catch (error) {
      alert('Ops algo deu errado!')
      console.log(error)
    }

  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h1>EncLink</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>

      <Menu />

      { showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  );
}
