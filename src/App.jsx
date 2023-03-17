import React, { useState } from "react";

function VehicleForm() { 
  const [vehicleData, setVehicleData] = useState({
    placa: "",
    estadoPlaca: "",
    tipo: "",
    subTipo: "",
    renavam: "",
    celular: "",
    proprietario: "",
    numAntt: "",
    possuiRastreador: false,
    terminal01: "",
    terminal02: "",
    paisPlaca: "",
    cidadePlaca: "",
    carroceria: "",
    portasLaterais: "",
    anoFabr: "",
    anoModelo: "",
    cor: "",
    marca: "",
    chassi: "",
    numFrota: "",
    tecnologia01: "",
    modelo01: "",
    tecnologia02: "",
    modelo02: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setVehicleData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(vehicleData);
    veiculoCadastrado = vehicleData;
  };

  return (
    <div>
       

      <form onSubmit={handleSubmit}>
        <label>
          Placa:
          <input
            type="text"
            name="placa"
            value={vehicleData.placa}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Estado da Placa:
          <input
            type="text"
            name="estadoPlaca"
            value={vehicleData.estadoPlaca}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Tipo:
          <input
            type="text"
            name="tipo"
            value={vehicleData.tipo}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Sub Tipo:
          <input
            type="text"
            name="subTipo"
            value={vehicleData.subTipo}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Renavam:
          <input
            type="text"
            name="renavam"
            value={vehicleData.renavam}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Celular:
          <input
            type="text"
            name="celular"
            value={vehicleData.celular}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Proprietário:
          <input
            type="text"
            name="proprietario"
            value={vehicleData.proprietario}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Num ANTT:
          <input
            type="text"
            name="numAntt"
            value={vehicleData.numAntt}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Possui Rastreador:
          <input
            type="checkbox"
            name="possuiRastreador"
            checked={vehicleData.possuiRastreador}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Terminal 01:
          <input
            type="text"
            name="terminal01"
            value={vehicleData.terminal01}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Terminal 02:
          <input
            type="text"
            name="terminal02"
            value={vehicleData.terminal02}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          País da Placa:
          <input
            type="text"
            name="paisPlaca"
            value={vehicleData.paisPlaca}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Cidade da Placa:
          <input
            type="text"
            name="cidadePlaca"
            value={vehicleData.cidadePlaca}
            onChange={handleInputChange}
          />
        </label>
        <br />
        
        <label>
          Carroceria:
          <input
            type="text"
            name="carroceria"
            value={vehicleData.carroceria}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Portas Laterais:
          <input
            type="text"
            name="portasLaterais"
            value={vehicleData.portasLaterais}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Ano Fabr.:
          <input
            type="text"
            name="anoFabr"
            value={vehicleData.anoFabr}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Ano Modelo:
          <input
            type="text"
            name="anoModelo"
            value={vehicleData.anoModelo}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Cor:
          <input
            type="text"
            name="cor"
            value={vehicleData.cor}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Marca:
          <input
            type="text"
            name="marca"
            value={vehicleData.marca}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Chassi:
          <input
            type="text"
            name="chassi"
            value={vehicleData.chassi}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Num Frota:
          <input
            type="text"
            name="numFrota"
            value={vehicleData.numFrota}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Tecnologia 01:
          <input
            type="text"
            name="tecnologia01"
            value={vehicleData.tecnologia01}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Modelo 01:
          <input
            type="text"
            name="modelo01"
            value={vehicleData.modelo01}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Tecnologia 02:
          <input
            type="text"
            name="tecnologia02"
            value={vehicleData.tecnologia02}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Modelo 02:
          <input
            type="text"
            name="modelo02"
            value={vehicleData.modelo02}
            onChange={handleInputChange}
            />
            </label>
            <br />
            <button type="submit">Cadastrar</button>
            </form>

            {/* mostrar dados formulario */} 
            {JSON.stringify(vehicleData)}
            
            </div>
            );
            }
            
export default VehicleForm;
    