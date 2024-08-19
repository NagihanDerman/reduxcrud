import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";
import { toast } from "react-toastify";

const AddForm = () => {
  //dispatch metodunun kurulumu

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // yazı boş mu kontrol et boşsa fonksiyonu durdur ve bildirim gönder
    if (!text) return toast.warn("Lütfen görev içeriğini belirleyin");

    // store'a kaydedilecek olan veriyi hazırla
    const newTodo = {
      id: v4(), // id oluşturan method
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };
    // yeni bir todo'nun ekleniceğini reducer'a haber ver
    dispatch(addTodo(newTodo));
    //formu sifirla
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        placeholder="örn: typescript projesi"
        type="text"
        className="form-control"
      />

      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
