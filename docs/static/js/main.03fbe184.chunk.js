(this["webpackJsonpmy-react-project"] =
    this["webpackJsonpmy-react-project"] || []).push([
    [0],
    [, , , , ,
        function(e) {
            e.exports = JSON.parse(
                '[{"id":1,"community":["Castilla la mancha","Madrid"],"age":"2 a\xf1os","name":"M\xe9rida","gender":"Hembra","breed":["Tosa Inu"],"personality":["sociable","cari\xf1osa","equilibrada"],"description":"La encanta estar con personas y dar lametones, es super juguetona y disfruta como la que m\xe1s de un paseo tranquilo por el campo o paseando con m\xe1s peludos","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"community":"Cantabria","age":"5 a\xf1os","name":"Dani","gender":"Macho","breed":["Presa Canario"],"personality":["tranquilo"],"description":"Dani es un cabez\xf3n de unos cinco a\xf1os al que le encanta mordisquear piedras, es tranquilo aunque algunas veces se le cruza el cable y ri\xf1e con otros perros","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":3,"community":"Andaluc\xeda","age":"2 a\xf1os","name":"Gea","gender":"Hembra","breed":["Pitbull"],"personality":["cari\xf1osa","juguetona","tranquila"],"description":"A Gea la encontraron abandonada con su compa\xf1ero Atlas en muy malas condiciones, creian que estaba embarazada ya que ten\xeda la tripa hinchada pero eran huesos y piedras lo que ten\xeda en el est\xf3mago. A pesar de eso es una perra 10, cari\xf1osa con perros, gatos y cualquier ser vivo","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}]'
            );
        }, , , , , ,
        function(e, a, t) {}, ,
        function(e, a, t) {},
        function(e, a, t) {},
        function(e, a, t) {},
        function(e, a, t) {},
        function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(1),
                o = t.n(n),
                s = t(4),
                l = t.n(s),
                r = (t(11), t(2)),
                c = t(0),
                i =
                (t(13),
                    function(e) {
                        return Object(c.jsxs)("form", {
                            className: "",
                            children: [
                                Object(c.jsx)("label", {
                                    className: "breed__name",
                                    htmlFor: "name",
                                    children: "Raza",
                                }),
                                Object(c.jsxs)("select", {
                                    className: "breed__select",
                                    type: "text",
                                    name: "breed",
                                    value: e.planet,
                                    id: "breed",
                                    onChange: function(a) {
                                        e.handleFilter({ key: "planet", value: a.target.value });
                                    },
                                    children: [
                                        Object(c.jsx)("option", {
                                            value: "all",
                                            children: "Cualquiera",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Tosa Inu",
                                            children: "Tosa Inu",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Pit bull",
                                            children: "Pit bull",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Rotweiller",
                                            children: "Rotweiller",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Mast\xedn",
                                            children: "Mast\xedn",
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }),
                u =
                (t(14),
                    function(e) {
                        return Object(c.jsxs)("form", {
                            className: "community",
                            children: [
                                Object(c.jsx)("label", {
                                    className: "community__name",
                                    htmlFor: "name",
                                    children: "Comunidad",
                                }),
                                Object(c.jsxs)("select", {
                                    className: "community__select",
                                    type: "text",
                                    name: "community",
                                    value: e.community,
                                    id: "community",
                                    onChange: function(a) {
                                        e.handleFilter({ key: "community", value: a.target.value });
                                    },
                                    children: [
                                        Object(c.jsx)("option", {
                                            value: "all",
                                            children: "Todas",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Andalucia",
                                            children: "Andaluc\xeda",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Aragon",
                                            children: "Arag\xf3n",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Asturias",
                                            children: "Asturias",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Baleares",
                                            children: "Baleares",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Canarias",
                                            children: "Canarias",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Cantabria",
                                            children: "Cantabria",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Castilla y leon",
                                            children: "Castilla y le\xf3n",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Castilla la mancha",
                                            children: "Castilla la mancha",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Catalu\xf1a",
                                            children: "Catalu\xf1a",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Valencia",
                                            children: "Valencia",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Extremadura",
                                            children: "Extremadura",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Galicia",
                                            children: "Galicia",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Madrid",
                                            children: "Madrid",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Murcia",
                                            children: "Murcia",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Navarra",
                                            children: "Navarra",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Pa\xeds Vasco",
                                            children: "Pa\xeds Vasco",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "La rioja",
                                            children: "La rioja",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Ceuta",
                                            children: "Ceuta",
                                        }),
                                        Object(c.jsx)("option", {
                                            value: "Melilla",
                                            children: "Melilla",
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }),
                d =
                (t(15),
                    function(e) {
                        return Object(c.jsxs)("div", {
                            className: "filter-container",
                            children: [
                                Object(c.jsx)(i, {
                                    handleFilter: e.handleFilter,
                                    breed: e.breed,
                                    handleReset: e.handleReset,
                                }),
                                Object(c.jsx)(u, {
                                    handleFilter: e.handleFilter,
                                    community: e.community,
                                    handleReset: e.handleReset,
                                }),
                                Object(c.jsx)("span", {
                                    onClick: function() {
                                        e.handleReset();
                                    },
                                    className: "reset icon fas fa-times",
                                }),
                            ],
                        });
                    }),
                m = t(5),
                b =
                (t(16),
                    function() {
                        var e = Object(n.useState)(m),
                            a = Object(r.a)(e, 2),
                            t = (a[0], a[1], Object(n.useState)("all")),
                            o = Object(r.a)(t, 2),
                            s = o[0],
                            l = o[1],
                            i = Object(n.useState)("all"),
                            u = Object(r.a)(i, 2),
                            b = u[0],
                            h = u[1];
                        return Object(c.jsxs)(c.Fragment, {
                            children: [
                                Object(c.jsxs)("header", {
                                    className: "header",
                                    children: [
                                        Object(c.jsx)("div", {
                                            children: Object(c.jsx)("img", {
                                                className: "header__logo",
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAFGCAMAAAC/hbyTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAXEgAAFxIBZ5/SUgAAAXdQTFRFAAAA//LY/+3L/+Ck/9J8/8pi/+Sx/8VV99ev/7w7+ufP8bdv8r9//7gv769f/O/f7qdP/85v65cv/8FI/+7b/+m+54cP/+jP+d+//+PD7J8///Hh5oAA/923//bl/9eK/+C9//Tn9s+f6Y8f/9Wl9MeP/9uX/9Kf/+vV/9qx//ft/+bJ/9erv7+/f39/X19fPz8/Hx8fAAAAT09Pr6+vDw8Pj4+PLy8vb29vn5+f39/fz8/PDg4O//Tnc0AAu2gArGAAOSAADg0N/////ffv88OG6Y0b+dir/b1E6Y4d8aQ296Yg/LEp54MD/bQs64oJ75US8ZgU9qMd8pwX7I4M+q0m86Ak7Jkr54cO//ft//Hh6pcu/der65Ys/dKg6IYM/MiL54YL+sOB8LRo54UK54UJ54MG7qlT648d54MH/c2V9tKk758788CB8qlP97ht9MWL54QI6pYs9K5Z8aRF6YoT+b137J486IUK7pkx+cuN+cWD+b53m8lDNQAAAH10Uk5TAP//////////////////////////////////4P//oP//gP//////////IP////////////////////////////////////////////////////////////////////////////////////////////////////////////+3kQPsAAAkcklEQVR4nO2d+d8bt3GHaemV9Orl9ZqWKYqibJl8adqWbMt2m9NNeqRnmqT3faSH2zRN0yNN7z++3ItcYOY7GCyXILWa5xd//GrBwQKDwczg2F7PMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzjHHnt1qlrYBhNuXX71DUwjKa8dnHqGhhGY+68duoaGEZT7tw9dQ0MoykX5joYLy0Xd05dA8NoysU9zVOXx66GYTTg4r4ibLu8On5FDCMa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",
                                                alt: "logo waggin",
                                            }),
                                        }),
                                        " ",
                                        " ",
                                    ],
                                }),
                                " ",
                                " ",
                                Object(c.jsxs)("section", {
                                    children: [
                                        Object(c.jsx)(d, {
                                            className: "filters",
                                            handleFilter: function(e) {
                                                "breed" === e.key ?
                                                    (l(e.value), console.log()) :
                                                    "community" === e.key && h(e.value);
                                            },
                                            handleReset: function() {
                                                l("all"), h("all");
                                            },
                                            breed: s,
                                            community: b,
                                        }),
                                        " ",
                                        " ",
                                    ],
                                }),
                                " ",
                                " ",
                                " ",
                                " ",
                                " ",
                            ],
                        });
                    });
            l.a.render(
                Object(c.jsx)(o.a.StrictMode, { children: Object(c.jsx)(b, {}) }),
                document.getElementById("root")
            );
        },
    ],
    [
        [17, 1, 2]
    ],
]);
//# sourceMappingURL=main.03fbe184.chunk.js.map