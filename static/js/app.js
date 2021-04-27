/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
import * as tf from '@tensorflow/tfjs';
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

async function loadOld() {
    const modelOld = await tf.loadLayersModel('model_old_tf/model.json');
    return modelOld;
};


function predict(model) {
    // code to connect to the <input> given value will fo here (just not yet)
    // const inputTensor = tf.tensor([parseInt(file)]); //then convert to tensor
    const inputTensor = tf.browser.fromPixels(file);
    //now lets make the prediction, we use .then bc the model is a promise
    model.then(model => {
        let result = model.predict(inputTensor);  // make predictions like in python 
        result = result.round().dataSync()[0];    // round prediction and get value
        alert(result ? "real" : " fake");         // creates pop-up. result==1 shows 'odd, otehrwise 'even
    });
};


function predictOld(modelOld) {
    // code to connect to the <input> given value will fo here (just not yet)
    // const inputTensor = tf.tensor([parseInt(file)]); //then convert to tensor
    var imageData = tf.browser.fromPixels(file, 1);
    // resize to 256x256
    var inputTensor = tf.image.resizeBilinear(imageData, [256,256]);
    inputTensor = inputTensor.reshape([1, 65536]);

    //now lets make the prediction, we use .then bc the model is a promise
    modelOld.then(modelOld => {
        let result = modelOld.predict(inputTensor);  // make predictions like in python 
        result = result.round().dataSync()[0];    // round prediction and get value
        alert(result ? "real" : " fake");         // creates pop-up. result==1 shows 'odd, otehrwise 'even
    });
};

const model = load();  // load the model now to prevent any delay when the user clicks 'Predict'
const modelOld = load(); 