/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
const img_height=256
const img_width=256


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


async function load() {
    const model = await tf.loadLayersModel('model_tf/model.json');
    return model;
};


function predict(model) {
    // code to connect to the <input> given value will fo here (just not yet)
    const inputTensor = tf.tensor([parseInt(file)]); //then convert to tensor

    //now lets make the prediction, we use .then bc the model is a promise
    model.then(model => {
        let result = model.predict(inputTensor);  // make predictions like in python 
        result = result.round().dataSync()[0];    // round prediction and get value
        alert(result ? "real" : " fake");         // creates pop-up. result==1 shows 'odd, otehrwise 'even
    });
};

const model = load();  // load the model now to prevent any delay when the user clicks 'Predict'