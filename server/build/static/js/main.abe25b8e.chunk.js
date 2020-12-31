(this["webpackJsonppoll-app"] = this["webpackJsonppoll-app"] || []).push([
  [0],
  {
    19: function (e, t, r) {},
    48: function (e, t, r) {},
    73: function (e, t, r) {},
    74: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r(1),
        o = r(0),
        n = r.n(o),
        s = r(18),
        i = r.n(s),
        c = (r(48), r(5)),
        l = r(4),
        p = r.n(l),
        u = r(9),
        d = r(10),
        b = r.n(d),
        h = (r(19), r(7)),
        g = r(2);
      r(23);
      function j() {
        var e = Object(o.useState)(""),
          t = Object(c.a)(e, 2),
          r = t[0],
          n = t[1],
          s = Object(o.useState)(""),
          i = Object(c.a)(s, 2),
          l = i[0],
          d = i[1],
          j = Object(o.useState)(""),
          f = Object(c.a)(j, 2),
          x = f[0],
          m = f[1],
          O = Object(h.e)(),
          v = (function () {
            var e = Object(u.a)(
              p.a.mark(function e(t) {
                var a, o;
                return p.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            (e.next = 4),
                            b.a.post(
                              "https://lincut.herokuapp.com/user/register",
                              { name: r, email: l, password: x },
                              {
                                headers: { "content-type": "application/json" },
                              }
                            )
                          );
                        case 4:
                          (a = e.sent),
                            O.push("/"),
                            console.log(a.data),
                            (e.next = 21);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            (o = e.t0.message.split(" ")[5]),
                            (e.t1 = o),
                            (e.next =
                              "403" === e.t1 ? 15 : "406" === e.t1 ? 17 : 19);
                          break;
                        case 15:
                          return (
                            g.b.error("Mobile number is already registered", {
                              position: "top-right",
                              autoClose: 3e3,
                              hideProgressBar: "false",
                            }),
                            e.abrupt("break", 20)
                          );
                        case 17:
                          return (
                            g.b.error("Mobile number not valid", {
                              position: "top-right",
                              autoClose: 3e3,
                              hideProgressBar: "false",
                            }),
                            e.abrupt("break", 20)
                          );
                        case 19:
                          g.b.error("Network error", {
                            position: "top-right",
                            autoClose: 3e3,
                            hideProgressBar: "false",
                          });
                        case 20:
                          console.log(o);
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(a.jsxs)("div", {
          className: "register-container",
          children: [
            Object(a.jsx)(g.a, { limit: 1 }),
            Object(a.jsx)("form", {
              className: "register-form",
              method: "POST",
              onSubmit: v.bind(this),
              children: Object(a.jsxs)("div", {
                className: "register-form-div",
                children: [
                  Object(a.jsx)("h2", {
                    style: { color: "#5f5f5f" },
                    children: "Register",
                  }),
                  Object(a.jsx)("input", {
                    type: "text",
                    className: "register-name input",
                    placeholder: "Name",
                    value: r,
                    onChange: function (e) {
                      return (t = e.target.value), void n(t);
                      var t;
                    },
                    required: !0,
                  }),
                  Object(a.jsx)("input", {
                    type: "email",
                    className: "register-name input",
                    placeholder: "Email",
                    value: l,
                    onChange: function (e) {
                      return (t = e.target.value), void d(t);
                      var t;
                    },
                    required: !0,
                  }),
                  Object(a.jsx)("input", {
                    type: "password",
                    className: "register-name input",
                    placeholder: "Password",
                    value: x,
                    onChange: function (e) {
                      return (t = e.target.value), void m(t);
                      var t;
                    },
                    required: !0,
                  }),
                  Object(a.jsx)("input", {
                    type: "submit",
                    value: "Register",
                    className: "register-button input",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var f = r(15);
      function x(e) {
        var t = Object(h.e)(),
          r = Object(o.useState)(""),
          n = Object(c.a)(r, 2),
          s = n[0],
          i = n[1],
          l = Object(o.useState)(""),
          d = Object(c.a)(l, 2),
          j = d[0],
          x = d[1],
          m = (function () {
            var r = Object(u.a)(
              p.a.mark(function r(a) {
                var o, n, i;
                return p.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            a.preventDefault(),
                            e.loading(!0),
                            (r.prev = 2),
                            (r.next = 5),
                            b.a.post(
                              "https://lincut.herokuapp.com/user/login",
                              { email: s, password: j },
                              {
                                headers: { "content-type": "application/json" },
                              }
                            )
                          );
                        case 5:
                          (o = r.sent),
                            (n = o.data),
                            localStorage.setItem("token", JSON.stringify(n)),
                            e.loading(!1),
                            t.push("/poll"),
                            (r.next = 27);
                          break;
                        case 12:
                          (r.prev = 12),
                            (r.t0 = r.catch(2)),
                            (i = r.t0.message.split(" ")[5]),
                            e.loading(!1),
                            (r.t1 = i),
                            (r.next =
                              "403" === r.t1
                                ? 19
                                : "406" === r.t1
                                ? 21
                                : "404" === r.t1
                                ? 23
                                : 25);
                          break;
                        case 19:
                          return (
                            g.b.error("Mobile number is already registered", {
                              position: "top-right",
                              autoClose: 3e3,
                              hideProgressBar: "false",
                            }),
                            r.abrupt("break", 26)
                          );
                        case 21:
                          return (
                            g.b.error("Mobile number not valid", {
                              position: "top-right",
                              autoClose: 3e3,
                              hideProgressBar: "false",
                            }),
                            r.abrupt("break", 26)
                          );
                        case 23:
                          return (
                            g.b.error("Mobile number not registered", {
                              position: "top-right",
                              autoClose: 3e3,
                              hideProgressBar: "false",
                            }),
                            r.abrupt("break", 26)
                          );
                        case 25:
                          g.b.error("Network error", {
                            position: "top-right",
                            autoClose: 3e3,
                            hideProgressBar: "false",
                          });
                        case 26:
                          console.log(i);
                        case 27:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[2, 12]]
                );
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        return Object(a.jsxs)("div", {
          className: "register-container",
          children: [
            Object(a.jsx)(g.a, { limit: 1 }),
            Object(a.jsxs)("form", {
              className: "register-form",
              onSubmit: m.bind(this),
              children: [
                Object(a.jsxs)("div", {
                  className: "register-form-div",
                  children: [
                    Object(a.jsx)("h2", {
                      style: { color: "#5f5f5f" },
                      children: "Log In",
                    }),
                    Object(a.jsx)("input", {
                      type: "email",
                      className: "register-name input",
                      placeholder: "Email",
                      value: s,
                      onChange: function (e) {
                        return (t = e.target.value), void i(t);
                        var t;
                      },
                      required: !0,
                    }),
                    Object(a.jsx)("input", {
                      type: "password",
                      className: "register-name input",
                      placeholder: "Password",
                      value: j,
                      onChange: function (e) {
                        return (t = e.target.value), void x(t);
                        var t;
                      },
                      required: !0,
                    }),
                    Object(a.jsx)("input", {
                      type: "submit",
                      value: "Log In",
                      className: "register-button input",
                    }),
                  ],
                }),
                Object(a.jsxs)("p", {
                  style: { fontSize: "12px" },
                  children: [
                    "Not yet registered?",
                    " ",
                    Object(a.jsx)(f.b, {
                      to: "/register",
                      style: { color: "grey" },
                      children: "Register here",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var m = r(16);
      function O(e) {
        var t = JSON.parse(localStorage.getItem("token")),
          r = Object(o.useState)([]),
          n = Object(c.a)(r, 2),
          s = (n[0], n[1]),
          i = Object(o.useState)([]),
          l = Object(c.a)(i, 2),
          d = l[0],
          j = l[1],
          f = Object(o.useState)(""),
          x = Object(c.a)(f, 2),
          O = x[0],
          v = x[1],
          y = Object(h.e)(),
          k = Object(o.useCallback)(
            Object(u.a)(
              p.a.mark(function r() {
                var a, o;
                return p.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            e.loading(!0),
                            (r.prev = 1),
                            (r.next = 4),
                            b.a.get(
                              "https://lincut.herokuapp.com/user/".concat(t.id),
                              {
                                headers: {
                                  Authorization: "Bearer ".concat(t.token),
                                },
                              }
                            )
                          );
                        case 4:
                          (a = r.sent),
                            s(a.data),
                            j(Object(m.a)(a.data.url)),
                            e.loading(!1),
                            (r.next = 21);
                          break;
                        case 10:
                          (r.prev = 10),
                            (r.t0 = r.catch(1)),
                            (o = r.t0.message.split(" ")[5]),
                            e.loading(!1),
                            (r.t1 = o),
                            (r.next = "401" === r.t1 ? 17 : 20);
                          break;
                        case 17:
                          return (
                            g.b.error("Session expired", {
                              position: "top-right",
                              autoClose: 3e3,
                              hideProgressBar: "false",
                            }),
                            setTimeout(function () {
                              return y.push("/");
                            }, 3e3),
                            r.abrupt("break", 21)
                          );
                        case 20:
                          g.b.error("Network error", {
                            position: "top-right",
                            autoClose: 3e3,
                            hideProgressBar: "false",
                          });
                        case 21:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 10]]
                );
              })
            ),
            [y, e, t]
          ),
          N = Object(o.useCallback)(
            Object(u.a)(
              p.a.mark(function r() {
                var a;
                return p.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if ("" !== O) {
                            r.next = 2;
                            break;
                          }
                          return r.abrupt(
                            "return",
                            g.b.error("Fields cannot be empty", {
                              position: "top-right",
                              autoClose: 3e3,
                              hideProgressBar: "false",
                            })
                          );
                        case 2:
                          return (
                            e.loading(!0),
                            (r.prev = 3),
                            (r.next = 6),
                            b.a.post(
                              "https://lincut.herokuapp.com/".concat(t.id),
                              { fullUrl: O },
                              {
                                headers: {
                                  Authorization: "Bearer ".concat(t.token),
                                },
                              }
                            )
                          );
                        case 6:
                          r.sent, v(""), k(), e.loading(!1), (r.next = 24);
                          break;
                        case 12:
                          (r.prev = 12),
                            (r.t0 = r.catch(3)),
                            console.log(r.t0),
                            e.loading(!1),
                            (a = r.t0.message.split(" ")[5]),
                            (r.t1 = a),
                            (r.next = "401" === r.t1 ? 20 : 23);
                          break;
                        case 20:
                          return (
                            g.b.error("Session expired", {
                              position: "top-right",
                              autoClose: 3e3,
                              hideProgressBar: "false",
                            }),
                            setTimeout(function () {
                              return y.push("/");
                            }, 3e3),
                            r.abrupt("break", 24)
                          );
                        case 23:
                          g.b.error("Network error", {
                            position: "top-right",
                            autoClose: 3e3,
                            hideProgressBar: "false",
                          });
                        case 24:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[3, 12]]
                );
              })
            ),
            [O, y, t, e, k]
          );
        return (
          Object(o.useEffect)(function () {
            null === t && y.push("/"), k();
          }, []),
          console.log(d),
          Object(a.jsxs)("div", {
            className: "dashboard-container",
            children: [
              Object(a.jsx)(g.a, { limit: 2 }),
              Object(a.jsx)("form", {
                className: "dashboard-form",
                onSubmit: function () {
                  return N();
                },
                children: Object(a.jsxs)("div", {
                  className: "dashboard-form-div",
                  children: [
                    Object(a.jsx)("input", {
                      type: "text",
                      className: "input",
                      placeholder: "Paste long url and shorten it",
                      required: !0,
                      value: O,
                      onChange: function (e) {
                        return (t = e.target.value), void v(t);
                        var t;
                      },
                      style: {
                        marginBottom: 0,
                        borderRadius: 0,
                        border: "none",
                        height: "45px",
                        fontSize: "16px",
                      },
                    }),
                    Object(a.jsx)("input", {
                      type: "submit",
                      value: "Shorten",
                      className: "input dashboard-shorten-btn",
                      style: {},
                    }),
                  ],
                }),
              }),
              Object(a.jsx)("div", {
                className: "dashboard-link-div",
                children: d.map(function (e) {
                  return Object(a.jsxs)(
                    "div",
                    {
                      className: "dashboard-link",
                      children: [
                        Object(a.jsxs)("p", {
                          style: {
                            borderBottomStyle: "solid",
                            borderColor: "#5f5f5f",
                            borderWidth: "2px",
                            width: "100%",
                            paddingBottom: "10px",
                            textAlign: "left",
                            marginBottom: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            fontStyle: "Poppins",
                          },
                          children: [
                            Object(a.jsx)("div", {
                              style: {
                                background: "#282c34",
                                padding: "5px",
                                color: "#fff",
                                fontWeight: "bold",
                              },
                              children: "Full url",
                            }),
                            Object(a.jsxs)("div", {
                              children: ["http://", e.fullUrl],
                            }),
                          ],
                        }),
                        Object(a.jsxs)("p", {
                          style: {
                            marginTop: 0,
                            paddingTop: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          },
                          children: [
                            Object(a.jsx)("div", {
                              style: {
                                background: "orangered",
                                padding: "5px",
                                color: "#fff",
                                fontWeight: "bold",
                              },
                              children: "Short url",
                            }),
                            Object(a.jsxs)("a", {
                              href: "https://lincut.herokuapp.com/".concat(
                                e.shortUrl
                              ),
                              style: { color: "grey", textDecoration: "none" },
                              children: [
                                "https://lincut.herokuapp.com/",
                                e.shortUrl,
                              ],
                            }),
                          ],
                        }),
                        Object(a.jsxs)("div", {
                          style: {
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "space-between",
                          },
                          children: [
                            Object(a.jsx)("p", {
                              style: {
                                borderStyle: "solid",
                                borderColor: "grey",
                                borderWidth: "2px",
                                padding: "5px",
                                borderRadius: "7px",
                                textAlign: "center",
                                color: "grey",
                                display: "flex",
                                fontWeight: "bold",
                                alignSelf: "flex-end",
                              },
                              children: e.date
                                .split("T")[0]
                                .split("-")
                                .reverse()
                                .join("/"),
                            }),
                            Object(a.jsxs)("p", {
                              style: {
                                borderStyle: "solid",
                                borderColor: "#007fff",
                                borderWidth: "2px",
                                padding: "5px",
                                borderRadius: "7px",
                                textAlign: "center",
                                color: "#007fff",
                                display: "flex",
                                fontWeight: "bold",
                                alignSelf: "flex-end",
                                justifyContent: "center",
                                alignItems: "center",
                              },
                              children: [
                                Object(a.jsx)("div", {
                                  style: {
                                    background: "#007fff",
                                    color: "#fff",
                                    padding: "2px",
                                    paddingRight: "5px",
                                    paddingLeft: "5px",
                                    marginRight: "2px",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  },
                                  children: e.clicks,
                                }),
                                "clicks",
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e._id
                  );
                }),
              }),
            ],
          })
        );
      }
      var v = r(20),
        y = function (e) {
          var t = Object(h.e)(),
            r = Object(o.useState)(!1),
            n = Object(c.a)(r, 2),
            s = n[0],
            i = n[1],
            l = Object(o.useState)([]),
            d = Object(c.a)(l, 2),
            j = d[0],
            f = d[1],
            x = Object(o.useState)(""),
            O = Object(c.a)(x, 2),
            y = O[0],
            k = O[1],
            N = Object(o.useState)(""),
            C = Object(c.a)(N, 2),
            S = C[0],
            w = C[1],
            B = Object(o.useState)(""),
            P = Object(c.a)(B, 2),
            I = P[0],
            R = P[1],
            T = JSON.parse(localStorage.getItem("token")),
            A = localStorage.getItem("pollName");
          Object(o.useEffect)(function () {
            T.adminToken || t.push("/"),
              (function () {
                var e = Object(u.a)(
                  p.a.mark(function e() {
                    var r, a;
                    return p.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                b.a.get(
                                  "https://cyon-poll.herokuapp.com/poll/".concat(
                                    localStorage.getItem("pollName")
                                  ),
                                  {
                                    headers: {
                                      Authorization: "Bearer ".concat(T.token),
                                    },
                                  }
                                )
                              );
                            case 3:
                              (r = e.sent),
                                f(Object(m.a)(r.data.categories)),
                                i(!1),
                                (e.next = 20);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                (a = e.t0.message.split(" ")[5]),
                                (e.t1 = a),
                                (e.next = "401" === e.t1 ? 14 : 18);
                              break;
                            case 14:
                              return (
                                i(!1),
                                g.b.error("Session expired", {
                                  position: "top-right",
                                  autoClose: 3e3,
                                  hideProgressBar: "false",
                                }),
                                t.push("/"),
                                e.abrupt("break", 20)
                              );
                            case 18:
                              i(!1),
                                g.b.error("Network error", {
                                  position: "top-right",
                                  autoClose: 3e3,
                                  hideProgressBar: "false",
                                });
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
          }, []);
          var z = (function () {
              var e = Object(u.a)(
                p.a.mark(function e() {
                  var t, r;
                  return p.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i(!0),
                              (e.prev = 1),
                              (e.next = 4),
                              b.a.post(
                                "https://cyon-poll.herokuapp.com/poll/category",
                                { name: y, pollName: A },
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer ".concat(
                                      T.adminToken
                                    ),
                                  },
                                }
                              )
                            );
                          case 4:
                            (t = e.sent),
                              i(!1),
                              f(Object(m.a)(t.data.categories)),
                              k(""),
                              console.log(j),
                              (e.next = 23);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(1)),
                              (r = e.t0.message.split(" ")[5]),
                              console.log(e.t0.message),
                              (e.t1 = r),
                              (e.next = "406" === e.t1 ? 18 : 21);
                            break;
                          case 18:
                            return (
                              i(!1),
                              g.b.error("Category already exist", {
                                position: "top-right",
                                autoClose: 3e3,
                                hideProgressBar: "false",
                              }),
                              e.abrupt("break", 23)
                            );
                          case 21:
                            i(!1),
                              g.b.error("Network error", {
                                position: "top-right",
                                autoClose: 3e3,
                                hideProgressBar: "false",
                              });
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 11]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            _ = (function () {
              var e = Object(u.a)(
                p.a.mark(function e(t) {
                  var r, a;
                  return p.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i(!0),
                              (e.prev = 1),
                              (e.next = 4),
                              b.a.post(
                                "https://cyon-poll.herokuapp.com/poll/candidate/".concat(
                                  t
                                ),
                                { name: I, pollName: A },
                                {
                                  headers: {
                                    "content-type": "application/json",
                                    Authorization: "Bearer ".concat(
                                      T.adminToken
                                    ),
                                  },
                                }
                              )
                            );
                          case 4:
                            (r = e.sent),
                              i(!1),
                              f(Object(m.a)(r.data.categories)),
                              console.log(r),
                              (e.next = 21);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              (a = e.t0.message.split(" ")[5]),
                              (e.t1 = a),
                              (e.next = "406" === e.t1 ? 16 : 19);
                            break;
                          case 16:
                            return (
                              i(!1),
                              g.b.error("Candidate already exist", {
                                position: "top-right",
                                autoClose: 3e3,
                                hideProgressBar: "false",
                              }),
                              e.abrupt("break", 21)
                            );
                          case 19:
                            i(!1),
                              g.b.error("Network error", {
                                position: "top-right",
                                autoClose: 3e3,
                                hideProgressBar: "false",
                              });
                          case 21:
                            console.log(t);
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            D = (function () {
              var e = Object(u.a)(
                p.a.mark(function e(t) {
                  var r, a, o, n;
                  return p.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (r = 0; r < j.length; r++)
                              for (a = j[r], o = 0; o < a.candidate.length; o++)
                                a.candidate[o]._id == t && w(j[r]._id);
                            return (
                              (e.prev = 1),
                              (e.next = 4),
                              b()({
                                url: "https://cyon-poll.herokuapp.com/poll/category/"
                                  .concat(S, "/candidate/")
                                  .concat(t),
                                method: "DELETE",
                                data: { pollName: A },
                                headers: {
                                  "content-type": "application/json",
                                  Authorization: "Bearer ".concat(T.adminToken),
                                },
                              })
                            );
                          case 4:
                            (n = e.sent),
                              w(""),
                              f(Object(m.a)(n.data.categories)),
                              console.log(n),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0.message);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            console.log(A),
            Object(a.jsxs)("div", {
              className: "poll-container",
              children: [
                Object(a.jsx)(g.a, { limit: 1 }),
                s
                  ? Object(a.jsx)("p", { children: Object(a.jsx)(v.a, {}) })
                  : null,
                Object(a.jsxs)("div", {
                  className: "poll-body",
                  children: [
                    Object(a.jsxs)("h2", {
                      className: "create-poll-label heading",
                      children: [
                        "Poll Name: ",
                        localStorage.getItem("pollName"),
                      ],
                    }),
                    Object(a.jsx)("button", {
                      className: "poll-create-poll-btn",
                      style: { alignSelf: "flex-start", marginLeft: 0 },
                      onClick: function () {
                        return t.push("/poll");
                      },
                      children: "Done",
                    }),
                    Object(a.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column-reverse",
                      },
                      children: [
                        j.map(function (e) {
                          return Object(a.jsxs)(
                            "div",
                            {
                              className: "create-poll-category",
                              children: [
                                Object(a.jsxs)("p", {
                                  className: "create-poll-label sub-heading",
                                  style: {
                                    textDecoration: "none",
                                    marginBottom: 0,
                                    background: "#000",
                                    color: "#fff",
                                    fontSize: "18px",
                                    marginLeft: 0,
                                    padding: "10px",
                                  },
                                  children: ["Category: ", e.name],
                                }),
                                Object(a.jsxs)("div", {
                                  className: "create-poll-candidate-div",
                                  children: [
                                    Object(a.jsx)("p", {
                                      className: "create-poll-candidate-label",
                                      children: "Candidates:",
                                    }),
                                    e.candidate.map(function (e) {
                                      return Object(a.jsxs)(
                                        "div",
                                        {
                                          style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                          },
                                          children: [
                                            Object(a.jsx)("p", {
                                              style: {
                                                margin: "2px",
                                                fontSize: "18px",
                                                marginLeft: "20px",
                                              },
                                              children: e.name,
                                            }),
                                            Object(a.jsx)("button", {
                                              style: {
                                                marginRight: "20px",
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "50%",
                                                textAlign: "center",
                                                border: "none",
                                                background: "rgb(255, 60, 11)",
                                                color: "#fff",
                                                outline: "none",
                                              },
                                              value: e._id,
                                              onClick: function (e) {
                                                return D(e.target.value);
                                              },
                                              children: "x",
                                            }),
                                          ],
                                        },
                                        e._id
                                      );
                                    }),
                                    Object(a.jsx)("input", {
                                      type: "text",
                                      className: "input",
                                      style: {
                                        width: "90%",
                                        marginBottom: 0,
                                        borderRadius: "0",
                                        borderBottomRightRadius: "8px",
                                      },
                                      onChange: function (e) {
                                        return (t = e.target.value), void R(t);
                                        var t;
                                      },
                                    }),
                                    Object(a.jsx)("button", {
                                      value: e._id,
                                      className: "poll-create-poll-btn",
                                      style: {
                                        marginTop: 0,
                                        float: "right",
                                        borderRadius: "0",
                                      },
                                      onClick: function (e) {
                                        return _(e.target.value);
                                      },
                                      children: "Add Candidate",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e._id
                          );
                        }),
                        Object(a.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            alignSelf: "flex-end",
                            boxSizing: "border-box",
                            width: "100%",
                            marginRight: 0,
                          },
                          children: [
                            Object(a.jsx)("input", {
                              type: "text",
                              className: "input",
                              placeholder: "Category name",
                              onChange: function (e) {
                                return (t = e.target.value), void k(t);
                                var t;
                              },
                              value: y,
                              style: {
                                marginRight: 0,
                                marginBottom: 0,
                                borderRadius: 0,
                              },
                            }),
                            Object(a.jsx)("button", {
                              className: "poll-create-poll-btn",
                              onClick: z,
                              style: {
                                marginRight: 0,
                                marginTop: 0,
                                borderRadius: 0,
                              },
                              children: "Add category",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        k = r(41),
        N = r(42);
      function C() {
        return Object(a.jsx)(a.Fragment, { children: Object(a.jsx)(v.b, {}) });
      }
      function S(e) {
        var t = Object(h.e)(),
          r = Object(o.useState)([]),
          n = Object(c.a)(r, 2),
          s = n[0],
          i = n[1],
          l = Object(o.useState)(""),
          d = Object(c.a)(l, 2),
          j = d[0],
          f = d[1],
          x = Object(o.useState)(!1),
          O = Object(c.a)(x, 2),
          v = O[0],
          y = O[1],
          S = JSON.parse(localStorage.getItem("token"));
        Object(o.useEffect)(function () {
          y(!0),
            (function () {
              var e = Object(u.a)(
                p.a.mark(function e() {
                  var r, a;
                  return p.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              b.a.get(
                                "https://cyon-poll.herokuapp.com/poll/".concat(
                                  localStorage.getItem("pollName")
                                ),
                                {
                                  headers: {
                                    Authorization: "Bearer ".concat(S.token),
                                  },
                                }
                              )
                            );
                          case 3:
                            0 == (r = e.sent).data.categories &&
                              (g.b.error("This Poll is empty", {
                                position: "top-right",
                                autoClose: 3e3,
                                hideProgressBar: "false",
                              }),
                              setTimeout(function () {
                                return t.push("/poll");
                              }, 3e3)),
                              i(Object(m.a)(r.data.categories)),
                              y(!1),
                              (e.next = 28);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              (a = e.t0.message.split(" ")[5]),
                              (e.t1 = a),
                              (e.next =
                                "401" === e.t1
                                  ? 15
                                  : "404" === e.t1
                                  ? 19
                                  : "405" === e.t1
                                  ? 22
                                  : 26);
                            break;
                          case 15:
                            return (
                              y(!1),
                              g.b.error("Session expired", {
                                position: "top-right",
                                autoClose: 3e3,
                                hideProgressBar: "false",
                              }),
                              t.push("/"),
                              e.abrupt("break", 28)
                            );
                          case 19:
                            return (
                              y(!1),
                              g.b.success("Click again to vote", {
                                position: "top-right",
                                autoClose: 3e3,
                                hideProgressBar: "false",
                              }),
                              e.abrupt("break", 28)
                            );
                          case 22:
                            return (
                              y(!1),
                              g.b.success("Poll Expired", {
                                position: "top-right",
                                autoClose: 3e3,
                                hideProgressBar: "false",
                              }),
                              t.push("/poll"),
                              e.abrupt("break", 28)
                            );
                          case 26:
                            y(!1),
                              g.b.error("Network error", {
                                position: "top-right",
                                autoClose: 3e3,
                                hideProgressBar: "false",
                              });
                          case 28:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
        }, []);
        var w = (function () {
          var e = Object(u.a)(
            p.a.mark(function e(r) {
              var a, o, n;
              return p.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        y(!0), (a = 0);
                      case 2:
                        if (!(a < s.length)) {
                          e.next = 10;
                          break;
                        }
                        if (
                          !s[a].candidate
                            .map(function (e) {
                              return e._id;
                            })
                            .includes(r)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (e.next = 6), f(s[a]._id);
                      case 6:
                        return e.abrupt("break", 10);
                      case 7:
                        a++, (e.next = 2);
                        break;
                      case 10:
                        return (
                          console.log(j),
                          console.log(r),
                          (e.prev = 12),
                          (e.next = 15),
                          b.a.post(
                            "https://cyon-poll.herokuapp.com/poll/vote/category/"
                              .concat(j, "/candidate/")
                              .concat(r),
                            { pollName: localStorage.getItem("pollName") },
                            {
                              headers: {
                                "content-type": "application/json",
                                Authorization: "Bearer ".concat(S.token),
                              },
                            }
                          )
                        );
                      case 15:
                        (o = e.sent),
                          i(Object(m.a)(o.data.categories)),
                          f(""),
                          y(!1),
                          console.log(o),
                          (e.next = 40);
                        break;
                      case 22:
                        (e.prev = 22),
                          (e.t0 = e.catch(12)),
                          (n = e.t0.message.split(" ")[5]),
                          (e.t1 = n),
                          (e.next =
                            "403" === e.t1
                              ? 28
                              : "401" === e.t1
                              ? 31
                              : "404" === e.t1
                              ? 35
                              : 38);
                        break;
                      case 28:
                        return (
                          y(!1),
                          g.b.error("You have already voted in this category", {
                            position: "top-right",
                            autoClose: 3e3,
                            hideProgressBar: "false",
                          }),
                          e.abrupt("break", 40)
                        );
                      case 31:
                        return (
                          y(!1),
                          g.b.error("Session expired", {
                            position: "top-right",
                            autoClose: 3e3,
                            hideProgressBar: "false",
                          }),
                          t.push("/"),
                          e.abrupt("break", 40)
                        );
                      case 35:
                        return (
                          y(!1),
                          g.b.success("Click again to vote", {
                            position: "top-right",
                            autoClose: 3e3,
                            hideProgressBar: "false",
                          }),
                          e.abrupt("break", 40)
                        );
                      case 38:
                        y(!1),
                          g.b.error("Network error", {
                            position: "top-right",
                            autoClose: 3e3,
                            hideProgressBar: "false",
                          });
                      case 40:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[12, 22]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return Object(a.jsxs)("div", {
          className: "poll-container",
          children: [
            v ? Object(a.jsx)(C, { style: { position: "fixed" } }) : null,
            Object(a.jsxs)("h3", {
              style: {
                alignSelf: "flex-start",
                marginLeft: "20px",
                color: "#fff",
                fontSize: "18px",
                borderBottomStyle: "solid",
                borderWidth: "5px",
                padding: "5px",
              },
              children: ["Poll Name: ", localStorage.getItem("pollName")],
            }),
            Object(a.jsx)(g.a, { limit: 1 }),
            Object(a.jsxs)("div", {
              className: "poll-body",
              style: {
                justifyContent: "center",
                alignSelf: "center",
                marginTop: "40px",
                borderRadius: 0,
              },
              children: [
                s.map(function (e) {
                  return Object(a.jsxs)(
                    "div",
                    {
                      className: "create-poll-candidate-div",
                      children: [
                        Object(a.jsxs)("p", {
                          className: "create-poll-candidate-label",
                          children: ["Category: ", e.name],
                        }),
                        e.candidate.map(function (e) {
                          return Object(a.jsxs)(
                            "div",
                            {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingBottom: "20px",
                              },
                              children: [
                                Object(a.jsx)("div", {
                                  style: {
                                    marginBottom: "2px",
                                    fontSize: "16px",
                                    marginLeft: "25px",
                                  },
                                  children: e.name,
                                }),
                                Object(a.jsxs)("p", {
                                  style: { marginRight: "20px" },
                                  children: ["Votes: ", e.votes],
                                }),
                                Object(a.jsx)("button", {
                                  style: {
                                    marginRight: "20px",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    textAlign: "center",
                                    border: "none",
                                    color: "#fff",
                                    outline: "none",
                                  },
                                  className: e.voters.includes(S.mobile_id)
                                    ? "green"
                                    : "yellow",
                                  onClick: function () {
                                    return w(e._id);
                                  },
                                  children: Object(a.jsx)(k.a, { icon: N.a }),
                                }),
                              ],
                            },
                            e._id
                          );
                        }),
                      ],
                    },
                    e._id
                  );
                }),
                Object(a.jsx)("button", {
                  className: "poll-create-poll-btn",
                  onClick: function () {
                    return t.push("/poll");
                  },
                  children: "Done",
                }),
              ],
            }),
          ],
        });
      }
      function w() {
        var e = JSON.parse(localStorage.getItem("token"));
        console.log(e);
        Object(h.e)();
        return Object(a.jsx)(a.Fragment, {});
      }
      r(73);
      var B = function () {
          var e = Object(o.useState)(!1),
            t = Object(c.a)(e, 2),
            r = t[0],
            n = t[1],
            s = function (e) {
              n(!!e);
            };
          return Object(a.jsxs)("div", {
            className: "App",
            children: [
              Object(a.jsx)(w, {}),
              Object(a.jsx)("div", {
                style: {
                  position: "fixed",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                  color: "#000",
                },
                children: r ? Object(a.jsx)(C, {}) : null,
              }),
              Object(a.jsxs)(f.a, {
                children: [
                  Object(a.jsx)(h.a, {
                    exact: !0,
                    path: "/",
                    children: Object(a.jsx)(x, { loading: s }),
                  }),
                  Object(a.jsx)(h.a, {
                    path: "/register",
                    children: Object(a.jsx)(j, { loading: s }),
                  }),
                  Object(a.jsx)(h.a, {
                    path: "/poll",
                    children: Object(a.jsx)(O, { loading: s }),
                  }),
                  Object(a.jsx)(h.a, {
                    path: "/create-poll",
                    children: Object(a.jsx)(y, {}),
                  }),
                  Object(a.jsx)(h.a, {
                    path: "/vote",
                    children: Object(a.jsx)(S, {}),
                  }),
                ],
              }),
              Object(a.jsx)("div", {
                style: { color: "#fff" },
                children: "Made by Yakubu Solomon",
              }),
            ],
          });
        },
        P = function (e) {
          e &&
            e instanceof Function &&
            r
              .e(3)
              .then(r.bind(null, 77))
              .then(function (t) {
                var r = t.getCLS,
                  a = t.getFID,
                  o = t.getFCP,
                  n = t.getLCP,
                  s = t.getTTFB;
                r(e), a(e), o(e), n(e), s(e);
              });
        };
      i.a.render(
        Object(a.jsx)(n.a.StrictMode, { children: Object(a.jsx)(B, {}) }),
        document.getElementById("root")
      ),
        P();
    },
  },
  [[74, 1, 2]],
]);
//# sourceMappingURL=main.abe25b8e.chunk.js.map
