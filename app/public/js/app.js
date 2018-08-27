/* eslint-disable */

const app = new Vue({
  el: '#app',
  data() {
    return {
      form: {
        name: '222',
        department: '33',
        station: '22',
        contact: '33',
        dob: '1991/1/22',
        email: '2@q.com',
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        department: [{ required: true, message: '请输入部门', trigger: 'blur' }],
        station: [{ required: true, message: '请输入岗位', trigger: 'blur' }],
        contact: [{ required: true, message: '请输入联系方式', trigger: 'blur' }],
        dob: [{ required: true, message: '请输入生日', trigger: 'blur' }],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          axios.post('/api/save', this.form).then(function(res) {
            const { code } = res.data;
            if (code === 0) {
              alert('注册成功');
            } else if (code === 1) {
              alert('注册失败，服务器错误');
            } else if (code === 2) {
              alert('注册失败，注册邮箱重复');
            }
          });
        } else {
          return false;
        }
      });
    },
  },
});
