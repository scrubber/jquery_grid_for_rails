namespace :jquery_grid_for_rails do

  desc "If the installation didn't copy the files correctly, use this task"
  task :setup do
    plugin_dir = File.join(File.dirname(__FILE__), '..')
    
    FileUtils.cp_r( 
      Dir[File.join(plugin_dir, 'public')], 
      File.join(RAILS_ROOT),
      :verbose => true
    )
    
    FileUtils.cp_r( 
      Dir[File.join(plugin_dir, 'config')], 
      File.join(RAILS_ROOT),
      :verbose => true
    )    
    puts "Finished."
  end
end