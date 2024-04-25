import React, {useState} from "react";

const Cadastro = () => {
  const [formData, setFormData] = useState({name: '', password: ''});
  const [feedback, setFeedback] = useState({message: '', type: ''});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try
    {
      const response = await fetch('http://localhost:3001/addUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if(response.ok)
      {
        setFeedback({message: 'Cadastrado', type: 'Sucesso!'});
      }
      else
      {
        const error = await response.json();
        setFeedback({message: error.message, type: 'error'});
      }

      setFormData({name: '', password: ''});

    }
    catch (error)
    {
      setFeedback({message: error.message, type: 'error'});
    }
    
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label>Nome: </label>
          <input 
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
          />
        <label>Senha: </label>
          <input 
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
          />
        <button type="submit">Cadastrar</button>{
          feedback.message && (
            <div className={feedback.type}>
              {feedback.message}
            </div>
          )
        }
      </form>
    </div>
  );
};

export default Cadastro;
