export const codes = {
    simple: [
        {
            formatter: 'html',
            title: 'HTML',
            code: `
<bk-accordion >
   <bk-accordion-item header="Item 1">
       Item 1 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 2">
       Item 2 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 3">
       Item 3 content.
   </bk-accordion-item>
</bk-accordion>
`
        },
    ],
    flush: [
        {
            formatter: 'html',
            title: 'HTML',
            code: `
<bk-accordion class="accordion-flush">
   <bk-accordion-item header="Item 1">
       Item 1 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 2">
       Item 2 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 3">
       Item 3 content.
   </bk-accordion-item>
</bk-accordion>
`
        },
    ],
    alwaysOpen: [
        {
            formatter: 'html',
            title: 'HTML',
            code: `
<bk-accordion mode="multiple">
   <bk-accordion-item header="Item 1">
       Item 1 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 2">
       Item 2 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 3">
       Item 3 content.
   </bk-accordion-item>
</bk-accordion>
`
        },
    ],
};
