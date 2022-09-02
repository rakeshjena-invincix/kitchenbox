// import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const AddRemoveInputField = () => {
  const [inputFields, setInputFields] = useState([
    {
      dish: "",
      price: "",
      quantity: "",
      total: "",
    },
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [total, setTotal] = useState(0);
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        dish: "",
        price: "",
        quantity: "",
        total: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...inputFields];
    console.log(list[index]);
    list[index][name] = value;
    console.log(list);
    setInputFields(list);
  };
  console.log(total);
  const fakeDatas = [
    { label: "Steam Rice", price: 49 },
    { label: "Jeera Rice", price: 59 },
    { label: "Ghee Rice", price: 59 },
    { label: "Veg Pulao", price: 89 },
    { label: "Matar Pulao", price: 89 },
    { label: "Plain Paratha", price: 29 },
    { label: "Namak Ajwain Paratha", price: 29 },
    {
      label: "Onion Paratha",
      price: 39,
    },
    { label: "Gobhi Paratha", price: 39 },
    { label: "Mooli Paratha", price: 39 },
    {
      label: "Methi Paratha",
      price: 39,
    },
    {
      label: "Palak Paratha",
      price: 49,
    },
    { label: "Aloo Paratha", price: 79 },
    { label: "Aloo Onion Paratha", price: 79 },
    {
      label: "Aloo Gobhi Paratha",
      price: 49,
    },
    { label: "Mix Paratha", price: 49 },
    { label: "Paneer Paratha", price: 79 },
    { label: "Plain Butter Toast", price: 29 },
    { label: "Dhaba Style Egg Bhurji", price: 49 },
    {
      label: "Boiled Egg",
      price: 49,
    },
    { label: "Plain Omelette With Butter Toast", price: 59 },
    { label: "Onion Omelette With Butter Toast", price: 59 },
    { label: "French Toast", price: 69 },
    { label: "Tomato Onion Omelette With Butter Toast", price: 69 },
    { label: "Spinach Omelette With Butter Toast", price: 79 },
    { label: "Boiled Egg With Butter Toast", price: 79 },
    { label: "Chilli Cheese Toast", price: 79 },
    { label: "Cheese Omelette With Butter Toast", price: 99 },
    { label: "Veg Hot And Sour Soup", price: 79 },
    { label: "Veg Manchow Soup", price: 79 },
    { label: "Veg Clear Soup", price: 99 },
    { label: "Chicken Clear Soup", price: 69 },
    { label: "Chicken Manchow Soup", price: 89 },
    { label: "Chicken Hot And Sour Soup", price: 89 },
    { label: "Dhaba Style Dal Makhni", price: 109 },
    { label: "Aloo Jeera", price: 89 },
    { label: "Bhindi Fry", price: 89 },
    { label: "Mix Vegetable Curry", price: 89 },
    { label: "Aloo Gobi Dry", price: 89 },
    { label: "Aloo Matar Curry", price: 89 },
    { label: "Mushroom Matar Masala", price: 99 },
    { label: "Kadai Paneer", price: 129 },
    { label: "Palak Paneer", price: 129 },
    { label: "Paneer Tikka Masala", price: 149 },
    { label: "Paneer Butter Masala", price: 149 },
    { label: "Chicken Curry", price: 129 },
    { label: "Chicken Tawa Fry", price: 129 },
    { label: "Chicken Butter Masala", price: 149 },
    { label: "Chicken Lababdar", price: 159 },
    { label: "Chicken Patiala", price: 169 },
    { label: "Curd", price: 15 },
    { label: "Onion Raita", price: 10 },
    {
      label: "Cucumber Raita",
      price: 49,
    },
    { label: "Boondi Raita", price: 49 },
    { label: "Boondi Aloo Raita", price: 59 },
    { label: "Mix Raita", price: 69 },
    { label: "Bikaner Papad", price: 10 },
    { label: "Rice Papad", price: 10 },
    { label: "Alu Bharta", price: 39 },
    { label: "Badhi Chura", price: 49 },
    { label: "Baingan Bharta", price: 59 },
    { label: "Kalara Alu Bhaja", price: 69 },
    { label: "Kalara Alu Chips", price: 69 },
    { label: "Potala Alu Bhaja", price: 69 },
    { label: "Tomato Khajuri Khata", price: 69 },
    { label: "Potala Alu Chips", price: 79 },
    { label: "Beans Alu Bhaja", price: 79 },
    { label: "Santula", price: 99 },
    { label: "Besara (No Onion Garlic)", price: 79 },
    { label: "Mahura (No Onion Garlic)", price: 119 },
    { label: "Pariba Ghanta", price: 139 },
    { label: "Dalma", price: 179958 },
    {
      label: "Dal Tadka",
      price: 79,
    },
    { label: "Egg Dal Tadka", price: 99 },
    { label: "Soyabean Alu Curry", price: 99 },
    { label: "Potala(6 pcs) Alu Rasa", price: 109 },
    { label: "Chhena(6 pcs) Alu Tarkari", price: 129 },
    { label: "Macha Ghanta", price: 79 },
    { label: "Chingudi Ghanta", price: 79 },
    { label: "Rohi Machha(1pc) Alu Jhola", price: 89 },
    { label: "Rohi Machha(1pc) Alu Besara", price: 129 },
    { label: "Bhakura Machha(1pc) Alu Jhola", price: 169 },
    { label: "Bhakura Machha(1pc) Alu Besara", price: 139 },
    {
      label: "Bhakura Machha(1pc) Sorisa Bhaja",
      price: 139,
    },
    { label: "Chingudi Bhaja (8pcs)", price: 129 },
    { label: "Chingudi(6pcs) Alu Tarkari", price: 159 },
    { label: "Kukuda(4pcs) Kosa", price: 129 },
    { label: "Kukuda(4pcs) Alu jhola", price: 129 },
    { label: "Chilli Potato", price: 59 },
    { label: "Honey Chilli Potato", price: 59 },
    { label: "Crispy Veg", price: 69 },
    { label: "Crispy Babycorn Chili", price: 69 },
    { label: "Mushroom Chili", price: 79 },
    { label: "Veg Ball Manchurian", price: 79 },
    { label: "Chicken Manchurian", price: 99 },
    { label: "Chilly Chicken", price: 99 },
    { label: "Lemon Chicken", price: 99 },
    { label: "Chicken 65", price: 99 },
    { label: "Garlic Chicken", price: 99 },
    { label: "Paneer Chilli", price: 99 },
    { label: "Chicken Chilli Gravy", price: 99 },
    { label: "Paneer Chilli Gravy", price: 99 },
    { label: "Veg Hakka Noodles", price: 69 },
    { label: "Mushroom Noodles", price: 79 },
    { label: "Paneer Noodles", price: 89 },
    { label: "Egg Noodles", price: 79 },
    { label: "Chicken Hakka Noodles", price: 99 },
    { label: "Veg Fried Rice", price: 69 },
    { label: "Schezwan Fried Rice", price: 79 },
    { label: "Chicken Fried Rice", price: 79 },
    { label: "Chicken Schezwan Fried Rice", price: 99 },
    { label: "Veg Manchurian Gravy Noodles Bowl", price: 129 },
    { label: "Veg Manchurian Gravy Rice Bowl", price: 129 },
    { label: "Paneer Manchurian Gravy Noodles Bowl", price: 149 },
    { label: "Chicken Chilli Gravy Noodles Bowl", price: 149 },
    { label: "Paneer Manchurian Gravy Rice Bowl", price: 149 },
    { label: "Chicken Chilli Gravy Rice Bowl", price: 149 },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {inputFields.map((data, index) => {
            const { dish, price, quantity, total } = data;
            return (
              <div className="row my-3" key={index}>
                <div className="col-11 d-flex ">
                  <div
                    className="form-group mx-3"
                    style={{
                      width: "100%",
                    }}
                  >
                    {/* <input
                      type="text"
                      onChange={(event) => handleChange(index, event)}
                      value={dish}
                      name="dish"
                      className="form-control"
                      placeholder="Enter Dish Name"
                      autoComplete="off"
                    /> */}
                    <Autocomplete
                      disablePortal
                      id="dish"
                      options={fakeDatas}
                      onChange={(event, value) => setSelectedOptions(value)}
                      isOptionEqualToValue={(option, value) =>
                        option.label === value.label
                      }
                      // style={{ width: 100 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          id="dish"
                          label="Dish"
                          style={{
                            width: "100%",
                          }}
                        />
                      )}
                    />
                  </div>
                  <div
                    className="form-group mx-3"
                    style={{
                      width: "100%",
                    }}
                  >
                    {/* <input
                      type="price"
                      onChange={(event) => handleChange(index, event)}
                      value={price}
                      name="price"
                      className="form-control"
                      placeholder="Price"
                      autoComplete="off"
                    /> */}
                    <TextField
                      id="price"
                      label="Price"
                      variant="outlined"
                      type="number"
                      onChange={(event) => handleChange(index, event)}
                      value={price}
                      name="price"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div
                    className="form-group mx-3"
                    style={{
                      width: "100%",
                    }}
                  >
                    {/* <input
                      type="number"
                      onChange={(event) => handleChange(index, event)}
                      value={quantity}
                      name="quantity"
                      className="form-control"
                      placeholder="Quantity"
                      autoComplete="off"
                    /> */}
                    <TextField
                      id="quantity"
                      label="Quantity"
                      variant="outlined"
                      type="number"
                      onChange={(event) => handleChange(index, event)}
                      value={quantity}
                      name="quantity"
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div
                    className="form-group mx-3"
                    style={{
                      width: "100%",
                    }}
                  >
                    {/* <input
                      type="number"
                      onChange={(event) => handleChange(index, event)}
                      value={total}
                      name="total"
                      className="form-control"
                      placeholder="Total"
                      autoComplete="off"
                      disabled
                    /> */}
                    <TextField
                      disabled
                      id="total"
                      label="Total"
                      variant="outlined"
                      type="number"
                      // onChange={(event) => handleChange(index, event)}
                      value={total}
                      name="total"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-1">
                  {inputFields.length !== 1 ? (
                    // <button
                    //   className="btn btn-outline-danger"
                    //   onClick={removeInputFields}
                    // >
                    //   x
                    // </button>
                    <AiFillDelete
                      onClick={removeInputFields}
                      color="red"
                      style={{
                        cursor: "pointer",
                        fontSize: "18px",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}

          <div className="row">
            <div className="col-sm-12 text-end">
              {/* <button
                className="btn btn-outline-success "
                onClick={addInputField}
              >
                +
              </button> */}
              <h4
                onClick={addInputField}
                color="green"
                className="btn btn-sm btn-outline-success"
                style={{
                  cursor: "pointer",
                }}
              >
                Add Item
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddRemoveInputField;
