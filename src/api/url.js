let Url = {
  // 车位管理列表
  ren_list: 'admin/park/search-park-info-list',
  //车位管理 车位名称 车位大厦接口
  car_name: 'admin/park/select-park-info-list',
  //车位管理 启用车位接口
  open: 'admin/park/on-off-park-info',
  //车位管理 删除车位接口
  delete: 'admin/park/delete-park-info',
  //车位管理 新增车场
  save: 'admin/park/save-park-info',
  //车位管理 查询车场详情信息
  find_park: 'admin/park/find-park-info',
  //车位管理 修改车场信息
  update: 'admin/park/update-park-info',
  //车位管理 删除出入口
  delete_gate: 'admin/gate/delete-gate-info',
  //车位管理 删除车位车牌信息
  delete_plate: 'admin/plate/delete-plate-info',
  //车场管理 启用禁用车位车牌状态
  on_off_plate: 'admin/plate/on-off-plate-info',
  //车场管理 车位车牌下拉框信息
  select_park_info: 'admin/plate/select-park-info-list',
  //车场管理 分页查询车位车牌信息
  search_plate: 'admin/plate/search-plate-info-list',
  //车场管理 新增车位车牌信息
  save_plate: "admin/plate/save-plate-info",
  //车场管理 修改车位车牌信息
  update_plate: "admin/plate/update-plate-info",
  // 车位管理 批量新增车位车牌信息
  batch_save: 'admin/plate/batch-save-plate-info',
  //车场管理 管理员账号信息分页查询
  search_admin: 'admin/admin_user/search-admin-user-list',
  //车场管理  启用 禁用管理员账号
  on_Off_admin: 'admin/admin_user/on-off-admin-user',
  //车场管理 根据用户查询授权角色信息
  search_role: 'admin/auth_role/search-role-ids',
  //车场管理 查询授权车场信息
  search_park_ids: 'admin/admin_user/search-park-ids',
  //车场管理 新增管理员账号
  save_admin: 'admin/admin_user/save-admin-user',
  //车场管理 修改管理员账号
  modify_admin: "admin/admin_user/modify-admin-user",
  //车场管理 删除管理员账号
  delete_admin: 'admin/admin_user/delete-admin-user',
  //车场管理 分页查询角色信息
  search_auth: 'admin/auth_role/search-auth-role-list',
  //车场管理 启用禁用后台角色
  on_off_auth: 'admin/auth_role/on-off-auth-role',
  //车场管理 新增后台角色
  ssave_auth: 'admin/auth_role/save-auth-role',
  //车场管理 编辑后台角色
  modify_auth: 'admin/auth_role/modify-auth-role',
  //车场管理 删除后台角色信息
  delete_auth: 'admin/auth_role/delete-auth-role',
  //车场管理 分页查询已绑定与未绑定菜单
  search_bind: 'admin/auth_menu/search-bind-auth-menu-list',
  //车场管理 后台角色绑定
  auth_role_bind: 'admin/auth_role/bind',
  //车场管理 删除后台角色绑定菜单信息
  delete_auth_role: 'admin/auth_role/delete-auth-role-menu',
  //车场管理  分页查询后台菜单信息
  search_auth_ment: 'admin/auth_menu/search-auth-menu-list',
  //车位管理 启用禁用后台菜单
  on_off_menu: 'admin/auth_menu/on-off-auth-menu',
  //车场管理 查询父菜单列表
  search_root_menu: 'admin/auth_menu/search-root-auth-menu-list',
  //车场管理  新增后台菜单信息
  save_auth_menu: 'admin/auth_menu/save-auth-menu',
  //车场管理  删除后台菜单信息
  delete_menu: "admin/auth_menu/delete-auth-menu",
  //车场管理 修改后台菜单信息
  modify_auth_menu: 'admin/auth_menu/modify-auth-menu',
  //车场管理  上传车场图片
  upload_img: 'admin/park/image_upload',
  //车场管理 模拟分页查询
  search_analog_plate: 'admin/plate/search-analog-plate-info-list',
  //车场管理 添加模拟车位
  save_analog_plate_info: 'admin/plate/save-analog-plate-info',
  //车场管理 修改车场可用车位数
  update_park_info_free: 'admin/park/update-park-info-free-sum',


  //一体机管理  车场出入口列表
  select_park: 'admin/gate/select-park-gate-list',
  //一体机 分页一体机查询
  search_park: 'admin/camera/search-park-info-list',
  //一体机 启用/禁用
  on_off_camera: 'admin/camera/on-off-camera-info',
  //一体机 删除一体机信息
  delete_camera: 'admin/camera/delete-camera-info',
  //一体机 清除一体机信息
  clear_camera: 'admin/camera/clear-camera-info',
  //一体机 新增一体机信息
  save_camera: 'admin/camera/save-camera-info',
  //*一体机 一体机详情
  find_camera: 'admin/camera/find-camera-info',
  //根据一体机查询详情
  find_cameras: 'admin/camera/find-camera-info-by-code',
  //一体机  修改一体机信息
  modify_camera: 'admin/camera/modify-camera-info',


  //诱导屏  分页查询诱导屏信息
  search_screen: 'admin/screen/search-screen-info-list',
  //诱导屏 启用禁用诱导屏标识
  on_off_screen: 'admin/screen/on-off--screen-info',
  //诱导屏 删除诱导屏信息
  delete_screen: 'admin/screen/delete-screen-info',
  //诱导屏 清除诱导屏信息
  clear_screen: 'admin/screen/clear-screen-info',
  //诱导屏 新增诱导屏
  save_screen: 'admin/screen/save-screen-info',
  //诱导屏 修改诱导屏信息
  modify_scree: 'admin/screen/modify-screen-info ',
  //诱导屏 查看诱导屏详细信息
  find_screen: 'admin/screen/find-screen-info',


  //日志报表  分页设备日志信息
  search_device: 'admin/device/search-device-log-list',
  //操作日志列表
  search_operate_log_list: 'admin/operate-log/search-operate-log-list',
  //操作日志列表详情
  search_operate_detail_info: 'admin/operate-log/search-operate-detail-info',

  //运维任务 
  //删除任务信息
  delete_task_info: 'admin/task/delete-task-info',
  //删除附件信息
  delete_task_attach: 'admin/task/delete-task-attach',
  //查询任务详细信息
  find_task_info: '/admin/task/find-task-info',
  //上传任务文件
  task_image_upload: 'admin/task/image_upload',
  //新增任务信息
  save_task_info: 'admin/task/save-task-info',
  //分页查询任务信息
  search_task_info_list: 'admin/task/search-task-info-list',
  //修改任务信息
  update_task_info: 'admin/task/update-task-info',

  //系统设置  查询设置列表信息
  screen_bright_list: 'admin/screen_bright/select-screen-bright-list',
  //系统设置  新增设置
  screen_bright: 'admin/screen_bright/save-screen-bright ',


  // 登录接口
  login: 'admin/auth/login',
  // 退出接口
  logout: 'admin/auth/logout',
  //获取用户信息
  member_info: 'admin/auth/left_menu',
  //修改密码
  update_password: 'admin/auth/update_password',

  //excel模板下载地址前缀
  excel: 'https://api.linkmoretech.cn' //线上
  // excel: 'https://api.linkmoreparking.net'
}

function time(number) {
  let date = new Date(number)
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

  // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
  return Y + '-' + M + '-' + D
}

function times(number) {
  let date = new Date(number)
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

  // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
  return Y + '年' + M + '月' + D + '日'
  18732465982
}

function TT(number) {
  let date = new Date(number)
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let mm = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

  // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
  // return Y + '年' + M + '月' + D + '日'
  return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + mm
}

function TTS(number) {
  let date = new Date(number)
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let mm = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

  // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
  // return Y + '年' + M + '月' + D + '日'
  return Y + '-' + M + '-' + D + ' ' + h + ':' + m
}

function TTS1(number) {
  let date = new Date(number)
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let mm = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

  // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
  // return Y + '年' + M + '月' + D + '日'
  return Y + '/' + M + '/' + D
}
export default {
  url: Url,
  time: time,
  times: times,
  TT: TT,
  TTS: TTS,
  TTS1: TTS1
}
