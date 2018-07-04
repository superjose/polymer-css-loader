// <!-- Start Style -->
// <!-- End Style -->

const styleElement = document.createElement('dom-module');

styleElement.innerHTML = `
    <template>
        <style>
            div {
                height:500px;
                width:100px;
                background-color: red;
            }
        </style>
    </template>
`;

styleElement.register('style-element');

const styleElement2 = document.createElement('dom-module');

styleElement2.innerHTML = `
    <template>
        <style>
            div#he {
                height:500px;
                width:100px;
                background-color: yellow;
            }
        </style>
    </template>
`;

styleElement2.register('style-element-2');
