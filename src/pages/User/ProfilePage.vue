<template>
  <div id="user-profile-page">
    <div class="ass1-login">
      <div class="ass1-login__content">
        <p>Profile</p>

        <div class="ass1-login__form">
          <div class="avatar">
            <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="">
          </div>
          <form action="#">
            <input type="text" class="form-control" placeholder="Tên ..." required="">

            <select class="form-control">
              <option value="">Giới tính</option>
              <option value="1">Nam</option>
              <option value="0">Nữ</option>
            </select>
            <input type="file" name="avatar" placeholder="Ảnh đại diện" class="form-control">
            <textarea class="form-control" cols="30" rows="5" placeholder="Mô tả ngắn ..."></textarea>
            <div class="ass1-login__send justify-content-center">
              <button type="submit" class="ass1-btn">Cập nhật</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-profile-page',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style></style>
