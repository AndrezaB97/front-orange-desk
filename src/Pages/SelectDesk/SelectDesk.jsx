// Importing modules:
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

// Import components:
import ConsultorHeader from "../.././Components/ConsultorHeader/ConsultorHeader";
import DesksLayoutImg from "./../../Assets/desks-layout.svg";
import { toast, ToastContainer } from "react-toastify";
import api from "./../../services/api";

// Importing style-sheets:

const SelectDesk = () => {
  document.title = "DESKS - Orange Desk";

  const history = useHistory();

  const inputStyle = {
    backgroundColor: "#F4F4F4",
  };

  const accordionHeader = {
    color: "#404099",
  };

  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");
  const [desks, setDesks] = useState([]);

  const { handleSubmit } = useForm();
  const HandleChange = (e) => setValue(e.target.value);

  useEffect(() => {
    const btnSelectDesk = document.getElementById("btnSelectDesk");
    if (
      value !== "" &&
      value !== undefined &&
      value.length <= 2 &&
      Number(value) >= 1 &&
      Number(value) <= 40
    ) {
      btnSelectDesk.removeAttribute("disabled");
    } else {
      btnSelectDesk.setAttribute("disabled", "");
    }
  }, [HandleChange]);

  useEffect(() => {
    getDesks();
  }, []);

  const submit = () => {
    let error = false;

    desks.forEach((element) => {
      if (value == element) {
        error = true;
      }
    });

    if (error) {
      toast.warn(`A mesa ${value} já foi reservada :(`);
    } else {
      localStorage.setItem("desk", value);
      history.push("review/");
    }
  };

  async function getDesks() {
    var config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    var dataDesk = {
      date: localStorage.getItem("date_desk"),
      unity_id: localStorage.getItem("unity_id"),
    };

    try {
      const { data } = await api.post(
        `/desk_available_number/`,
        dataDesk,
        config
      );

      setDesks(data);
    } catch (error) {
      toast.error("Erro ao buscar mesas disponíveis", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <React.Fragment>
      <div className="container-lg d-flex flex-column justify-content-start bg-white container vw-100 vh-100">
        <ConsultorHeader currentStep={"desk"} />

        <main className="container-lg mt-3 d-flex flex-column flex-lg-row justify-content-around align-items-center">
          <p className="d-md-block text-start col-md-8 fw__medium d-lg-none ms-auto me-auto text-black mt-md-5 mt-4 mb-md-3 mt-lg-5">
            Escolha sua estação de trabalho
          </p>

          <img
            className="img-fluid mt-4 ms-auto ms-lg-0 me-auto me-lg-0 col-md-6 col-lg-4"
            src={DesksLayoutImg}
            alt="Imagem ilustrando layout de um escritório FCamara."
          />

          <form
            className="col-12 col-md-8 col-lg-4 d-flex flex-column justify-content-between mt-5 mt-lg-0"
            onSubmit={handleSubmit(submit)}
          >
            <h5 className="d-lg-block d-none mb-md-3">
              Escolha sua estação de trabalho
            </h5>

            <input
              onChange={HandleChange}
              type="number"
              style={inputStyle}
              className="text-start fw__light form mt-lg-5 form-control shadow-none"
              placeholder="Digite o nº da mesa que quer reservar"
              min="1"
              max="40"
              required
            />
            {((value !== "" && Number(value) < 1) || Number(value) > 40) && (
              <span className="text-danger">
                O valor deve estar entre 1 e 40
              </span>
            )}
            <div
              class="accordion accordion-flush mt-3 mb-5"
              id="accordionFlush"
            >
              <div class="accordion-item text-center">
                <p class="accordion-header" id="flush-showDesks">
                  <button
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    style={accordionHeader}
                    class="collapsed bg-white shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {toggle ? (
                      <span>Ocultar</span>
                    ) : (
                      <span>Mostrar Mesas Ocupadas</span>
                    )}
                    {/* <button style={accordionHeader} onClick={ getDesks } class="collapsed bg-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Mostrar mesas disponíveis */}
                  </button>
                </p>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-showDesks"
                  data-bs-parent="#accordionFlush"
                >
                  <div class="accordion-body">
                    {desks.map((element) => {
                      return element + " | ";
                    })}

                    {desks.length == 0 ? "Nenhuma Mesa Ocupada" : ""}
                  </div>
                </div>
              </div>
            </div>
            <button
              disabled
              id="btnSelectDesk"
              onClick={submit}
              className="btn-orange form-control border-0 shadow-none mb-md-0 mb-3"
            >
              Escolher estação de trabalho
            </button>
          </form>
        </main>
      </div>

      <ToastContainer />
    </React.Fragment>
  );
};

export default SelectDesk;
