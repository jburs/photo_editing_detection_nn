# photo_editing_detection_nn

photo editing detection using tensor flow neural net. Current accuracy of ~60%, and loss of .66. Next step is hyperparameter tuning to increase accuracy of the model.

dataset from kaggle: https://www.kaggle.com/ciplab/real-and-fake-face-detection

github pages:  https://jburs.github.io/photo_editing_detection_nn/

To do:
 - (done) write ML program using TensorFlow
 - hyperparameter tuning
 - (done) convert py tensorflow h5 to js
 - (done) write html page where user can upload image 
 - use tensorflowjs to predict on uploaded image
 - stylize web page


Converting python tf h5 file to json for javascript how to:
 - create new shell/environment for tensorflowjs
 - pip install tonsorflowjs
 - go to command prompt  
 - cd Documents\Data_analytics\projects\photo_editing_detection_nn
 - tensorflowjs_converter --input_format=keras model_tf\model.h5 model_tf
 - (convert to graph model) tensorflowjs_converter --input_format keras --output_format=tfjs_graph_model model_tf/model.h5 model_tf

