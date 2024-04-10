document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input')

    const patterns = {
        username: /^[A-Za-z][A-Za-z0-9!@#$%^&*()_+-]*$/,
        password: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8, }$/,
        confirmedPassword: /^$/,
        fullname: /^$/,
        dob: /^$/,
        address: /^$/,
        phoneNumber: /^$/,
        email: /^$/
    }

    const errorMessages = {
        username: 'Tên đăng nhập: bắt đầu là ký tự, có hoặc không có ký tự số, ký tự đặc biệt và không được có khoảng trắng.',
        password: 'Mật khẩu: từ 8 ký tự trở lên, có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt.',
        confirmedPassword: 'Nhập lại mật khẩu phải giống Mật khẩu.',
        fullname: 'Họ tên: Phải có ít nhất Họ, Tên. Ký tự đầu bắt buộc phải viết hoa',
        dob: 'Ngày tháng năm sinh phải trên 16 tuổi',
        address: 'Địa chỉ không được để trống',
        phoneNumber: 'Điện thoại: là số điện thoại 10 ký tự số, bắt đầu là 09, 03, 07, 06, 05, 04',
        email: 'Email: luôn đúng định dạng của địa chỉ email.',
    }

    function validate(field, regex, errorMessageTag, errorMessage) {
        if (regex.test(field.value)) {
            errorMessageTag.innerHTML = '*'
        } else {
            errorMessageTag.innerHTML = errorMessage
        }
    }

    inputs.forEach(input => {
        input.addEventListener('blur', e => {
            validate(e.target, patterns[e.target.name], e.target.parentElement.querySelector('.error-message'), errorMessages[e.target.name])
        })
    })
})