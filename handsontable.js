$(function() {
    var data = [
      ['Java', '1', '降', '-0.01%'],
      ['C', '2', '升', '+2.44%'],
      ['Python', '3', '升', '+1.41%'],
      ['C++', '4', '降', '-2.58%'],
      ['c#', '5', '升', '+2.70%'],
      ['Visual Basic.NET', '6', '降', '-1.17%'],
      ['JavaScript', '7', '降', '-0.85%']
    ];
  
    var container = $('.handsontable');
    
    var handsontable = new Handsontable(container.get(0), {
      data: data,
      contextMenu: true,  
      manualRowResize : true,     
      manualColumnResize : true, 
      colHeaders: [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
      ],
      colWidths:175,
      rowHeights:35,
      className: 'htMiddle'
    });
  
    return handsontable;
  });
