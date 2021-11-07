copy this into HTML

<!-- slider -->
<section class="slider">
  <div class="slider__container">

    <!-- img -->
    <div class="slider__img">
      <div class="slider__page">
        <!-- content -->
        <div class="slider__page__content">
          ...
        </div>
        <!-- content -->
      </div>
    </div>
    <!-- img -->

    <!-- img -->
    <div class="slider__img">
      <div class="slider__page">
        <!-- content -->
        <div class="slider__page__content">
          ...
        </div>
        <!-- content -->
      </div>
    </div>
    <!-- img -->

    <!-- img -->
    <div class="slider__img">
      <div class="slider__page">
        <!-- content -->
        <div class="slider__page__content">
          ...
        </div>
        <!-- content -->
      </div>
    </div>
    <!-- img -->

  </div>

  <button class="btn btn-left"></button>
  <button class="btn btn-right"></button>

</section>
<!-- slider -->

you can change following elements in css

.slider {
  width: 80%;
}

.slider__page {
  padding-top: 50%;

  used for responsive hight to it's width; 
}

.btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  cursor: pointer;
}