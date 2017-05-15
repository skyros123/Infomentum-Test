

 $(document).ready(function() {
	     var $animal = $('#animal');
	     var $animal_holder = $('#animal-holder');
	     var $buttons = $('.donation-value .btn-group .btn');
	     var $donation = $('#donation_value');


         $animal_holder.removeClass().addClass($animal.val());
	     $animal.on('change',function(){
	     	$this = $(this);
	     	$('#animal-holder').removeClass().addClass($this.val());
	     }); 

	     $('#form-donation').on('submit',function(){
			if ($donation.val() != '') {
				return true
			} else {
				alert('Want to help us?? Please, select a value to donate!');
			}
			return false;
	     });

	     $buttons.on('click',function(){
	     	$this = $(this);
	     	$val = $this.find('input').val();
	     	$donation.val($val);
	     	$donation.attr('min',$val);
	     	console.log($donation.attr('min'));
	     });

	     $donation.
		     on('focus',function(){
		     	var $this  = $(this);
		     	var $val   = $(this).val();
		     	
		     	$buttons.each(function(i){
		     		var $btn = $(this);
		     		var $input = $btn.find('input');
		     		
		     		if ($input.is(':checked') === true) {
		     			$btn.button('reset').removeClass('active');
		     			$this.val(11);
		     			$donation.attr('min',11);
		     		}
		     	});
		     })
	 }); 

